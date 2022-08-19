import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FormEditNews = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getNewsById = async () => {
      const response = await axios.get(`http://localhost:5000/news/${id}`);
      setTitle(response.data.title);
      setFile(response.data.image);
      setPreview(response.data.url);
    };
    getNewsById();
  }, [id]);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    try {
      await axios.patch(`http://localhost:5000/news/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/news");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="title">News</h1>
      <h2 className="subtitle">Update News</h2>
      <div className="card p-2 mr-2 is-shadowless">
        <div className="content">
          <form onSubmit={updateProduct}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <div className="file">
                  <label className="file-label">
                    <input
                      type="file"
                      className="file-input"
                      onChange={loadImage}
                    />
                    <span className="file-cta">
                      <span className="file-label">Choose a file...</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {preview ? (
              <figure className="image is-128x128">
                <img src={preview} alt="Preview" />
              </figure>
            ) : (
              ""
            )}

            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditNews;
