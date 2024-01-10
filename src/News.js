import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
          params: {
            token: '518c4567a749f5b800a5f9ae3b202a18',
            lang: 'es',
          },
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error al obtener noticias:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Últimas Noticias</h1>
      <ul>
        {news.map((article) => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;