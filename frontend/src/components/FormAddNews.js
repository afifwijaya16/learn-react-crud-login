import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddNews = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveNews = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    try {
      await axios.post("http://localhost:5000/news", formData, {
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
      <h2 className="subtitle">Add News</h2>
      <div className="card p-2 mr-2 is-shadowless">
        <div className="content">
          <form onSubmit={saveNews}>
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
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddNews;
