/* eslint-env jquery */
/* global $ */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

let data = []
const settings = {
    async: true,
    crossDomain: true,
    url: 'https://rawg-video-games-database.p.rapidapi.com/games?key=22c9553a0abd4274a922003e0c8d7f59',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bc2d176e22mshac18e82dfcbfe75p1972e7jsn044986d1dd75',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    }
};


$.ajax(settings).done(function (response) {
    for(const game of response['results']){
        let curData = {};
        curData['name'] = game['name']
        curData['metacritic'] = game['metacritic']
        curData['rating'] = game['rating']
        curData['released'] = game['released']
        curData['image'] = game['short_screenshots'][0]['image']
        curData['playtime'] = game['playtime']
        curData['parent_platforms'] = game['parent_platforms']
        curData['dominant_color'] = game['dominant_color']
        data.push(curData)
    }
});
console.log(data)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
