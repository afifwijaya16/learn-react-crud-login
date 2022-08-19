import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Newslist = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const response = await axios.get("http://localhost:5000/news");
    setNews(response.data);
  };

  useEffect(() => {
    getNews();
  }, []);

  const deleteNew = async (newsId) => {
    await axios.delete(`http://localhost:5000/news/${newsId}`);
    getNews();
  };
  return (
    <div>
      <h1 className="title">News</h1>
      <h2 className="subtitle">List of News</h2>
      <Link to="/news/add" className="button is-small is-primary mb-2">
        Add New
      </Link>
      <div className="columns is-multiline mt-2">
        {news.map((news) => (
          <div className="column is-one-quarter" key={news.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={news.url} alt={news.title} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{news.title}</p>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <Link to={`edit/${news.uuid}`} className="card-footer-item">
                  Edit
                </Link>
                <button
                  onClick={() => deleteNew(news.uuid)}
                  className="card-footer-item"
                >
                  Delete
                </button>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newslist;
