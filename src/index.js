import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let apikey, url, articles, i;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

apikey = '4aee8bf169a3e2253bd6a99cc032c153';
url = 'https://gnews.io/api/v4/{endpoint}?apikey=API_KEY' + apikey;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    articles = data.articles;

    for (i = 0; i < articles.length; i++) {
      console.log("Title: " + articles[i]['title']);
      console.log("Description: " + articles[i]['description']);
      break;
    }
  });