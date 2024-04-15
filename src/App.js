/* eslint-env jquery */
/* global $ */
import logo from './logo.svg';
import './App.css';
import TextInputComponent from './TextInput';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function App({data}){      
    return(
        <div className="App">
            <span className="right">
                <Search data = {data}/>
            </span>
        </div>
    );
}


function Search({data}){
    
  const[searchTerm, setSearchTerm] = useState('');
  const[minRatingSearchTerm, setMinRatingSearchTerm] = useState('');
  const[minMetacriticRatingSearchTerm, setMinMetacriticRatingSearchTerm] = useState('');

    
  const searchCards = data.filter(function (item){
    return item.name.includes(searchTerm) && (item.rating > minRatingSearchTerm) && (item.metacritic > minMetacriticRatingSearchTerm);
  });    
  
  
  const handleChange = (event) =>
  {
    setSearchTerm(event.target.value);
  }
  
  const handleMinRatingChange = (event) =>
  {
    setMinRatingSearchTerm(event.target.value);
  }
  const handleMinMetacriticRatingChange = (event) =>
  {
    setMinMetacriticRatingSearchTerm(event.target.value);
  }

  return(
    <div class='p-3'>
      <h1>Поиск</h1>
      <div class='w-100 p-3'>
          <label htmlFor='search'>По имени:</label>
          <input id="search" type='text' onChange={handleChange} style={{marginTop:"40px", marginBottom:"40px",}}></input>
      </div>
      <div>
          <label htmlFor='search' style={{marginLeft:"10px"}}>Мин. рейтинг:</label>
          <input id="search" type='text' onChange={handleMinRatingChange} style={{marginTop:"40px", marginBottom:"40px"}}></input>
          <label htmlFor='search' style={{marginLeft:"10px"}}>Мин. оценка на Метакритик:</label>
          <input id="search" type='text' onChange={handleMinMetacriticRatingChange} style={{marginTop:"40px", marginBottom:"40px"}}></input>
      </div>
      
      <ListCars list={searchCards}/>
    </div>
  )
}

const ListCars = (props) =>{
  return(
      <div class='myDiv'>
        <div class="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4">      
            {props.list.map(function(item)
            {
              return <div>
                      <div class="card bg-dark text-light h-100">
                          <img src={item.image} class="card-img-top" alt="..."/>
                          <h2>{item.name}</h2>
                          <div class="card-body d-flex flex-column fs-5">
                            <div class="card-image-overlay m-auto align-items-center">
                              <table class="table table-noborder table-dark">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <span calss="info"> 
                                            <i class="bi bi-star-fill"></i> {item.rating}/5
                                        </span>
                                        <div class='helpText'>Рейтинг</div>
                                      </td>
                                      <td>
                                        <span calss="info"> 
                                            <i class="bi bi-journal-check"></i> {item.metacritic}/100
                                        </span>
                                        <div class='helpText'>Метакритик</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span calss="info"> 
                                            <i class="bi bi-calendar4-event"></i> {item.released}
                                              </span>
                                        <div class='helpText'>Дата выхода</div>
                                      </td>
                                      <td>
                                        <span calss="info"> 
                                            <i class="bi bi-clock-fill"></i> {item.playtime} ч.
                                                    </span>
                                        <div class='helpText'>Время прохождения</div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                            </div>
                            <a href="#"><button type="button" class="btn btn-outline-light fs-4">Подробнее</button></a>
                          </div>
                      </div>
                    </div>    
            })}
        </div>
    </div>
  );
}

export default App;