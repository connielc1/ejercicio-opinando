import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { ReactDOM } from 'react';

let apikey, url, articles, i;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

apikey = '518c4567a749f5b800a5f9ae3b202a18';
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
