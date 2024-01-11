import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [titleSearch, setTitleSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
          params: {
            token: '4aee8bf169a3e2253bd6a99cc032c153',
            lang: 'es',
            category: categoryFilter,
            q: titleSearch,
          },
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error al obtener noticias:', error);
      }
    };

    fetchData();
  }, [categoryFilter, titleSearch]);

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const handleTitleSearchChange = (event) => {
    setTitleSearch(event.target.value);
  };

  return (
    <div>
      <div className="menu-container" >
        <h1>Noticias</h1>
        <div className="menu-filters">
          <select value={categoryFilter} onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="">Todas las categorías</option>
            <option value="business">Negocios</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="health">Salud</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="technology">Tecnología</option>
          </select>
          <input
            type="text"
            className="search"
            placeholder="Buscar por título"
            value={titleSearch}
            onChange={handleTitleSearchChange}
          />
        </div>
      </div>
      <div className="container">
        {news.map((article) => (
          <div key={article.url} className="news-box">
            <h2>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p>{article.description}</p>
            <img className="news-image" src={article.image} alt={article.title} />
            <p>Fuente: <a href={article.source.url} target="_blank" rel="noopener noreferrer">{article.source.name}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;