import React, { useState, 
  // useEffect 
} from 'react';
// import axios from 'axios'; 
const mockNews= [
  {
    "title": "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
    "description": "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
    "content": "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
    "url": "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
    "image": "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
    "publishedAt": "2022-09-28T08:14:24Z",
    "source": {
      "name": "PhoneArena",
      "url": "https://www.phonearena.com",
    
    },
    "category": "technology",
  },

  {
    "title": "Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
    "description": "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
    "content": "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
    "url": "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
    "image": "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
    "publishedAt": "2022-09-28T08:14:24Z",
    "source": {
      "name": "PhoneArena",
      "url": "https://www.phonearena.com"
    },
    "category": "business",
  },
  {
    "title": "Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
    "description": "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
    "content": "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
    "url": "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
    "image": "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
    "publishedAt": "2022-09-28T08:14:24Z",
    "source": {
      "name": "PhoneArena",
      "url": "https://www.phonearena.com"
    },
    "category": "sports",
  }
]

const News = () => {
  const [news, 
   // setNews
  ] = useState(mockNews);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [titleSearch, setTitleSearch] = useState('');

 /* useEffect(() => {
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
  }, [categoryFilter, titleSearch]); */

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const handleTitleSearchChange = (event) => {
    setTitleSearch(event.target.value);
  };

  const datosFiltradosCategory = news.filter((article) =>
  article.category.includes(categoryFilter) );

  const datosFiltradosSearch = news.filter((article) =>
  article.title.toLowerCase().includes(titleSearch.toLowerCase()))
  
  const data= categoryFilter.length !== 0 ? datosFiltradosCategory:titleSearch.length !== 0 ? datosFiltradosSearch:news
  
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
        {data.map((article,index) => (
          <div key={index} className="news-box">
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