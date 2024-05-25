/* eslint-env jquery */
/* global $ */
import logo from './logo.svg';
import './App.css';
import TextInputComponent from './TextInput';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Slider from 'react-slider'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function App({data}){      
    return(
        <div className="App">
            <Search data = {data}/>
        </div>
    );
}


function Search({data}){
    
  const[searchTerm, setSearchTerm] = useState('');
  const[metacriticRatingBounds, setMetacriticRatingBounds] = useState([0, 100]);
    
  const [values, setValues] = useState([0, 500]);
  const handleRatingChange = (newValues) => setValues(newValues);
    
  const[playtimeBounds, setPlaytimeBounds] = useState([0, 100]);
  const handlePlaytimeBoundsChange = (newValues) => setPlaytimeBounds(newValues);
  const[genres, setGenres] = useState(['All']);

  function changeGenre(genre, n){
      if(document.getElementsByClassName("dropdown-menu")[0].childNodes[n].classList.contains('active') == false){
          setGenres(genres.concat(genre));
          document.getElementsByClassName("dropdown-menu")[0].childNodes[n].classList.add('active')
      }
      else{
          let index = genres.indexOf(genre);
          genres.splice(index, 1);
          setGenres([...genres]);
          document.getElementsByClassName("dropdown-menu")[0].childNodes[n].classList.remove('active')
      }
  }
    
  const searchCards = data.filter(function (item){
    let hasGenres = true
    for(let i = 0; i < genres.length; i++){
        if(item.genres.has(genres[i]) == false){
            hasGenres = false
        }
    }
    if (genres.length == 1){
        document.getElementById("dropdown-basic-button").innerHTML = 'All'
    }
    else{
        document.getElementById("dropdown-basic-button").innerHTML = genres.slice(1,genres.length+1);
    }

    return item.name.includes(searchTerm) && (item.rating > values[0]/100) && (item.rating < values[1]/100+0.01) && (item.metacritic >  metacriticRatingBounds[0]) && (item.metacritic < metacriticRatingBounds[1]+1) && (item.playtime > playtimeBounds[0]) && (item.playtime <  playtimeBounds[1]+1) && hasGenres;
  });    
  
  const handleChange = (event) =>
  {
    setSearchTerm(event.target.value);
  }
  
  const handleMetacriticRatingChange = (newValues) => setMetacriticRatingBounds(newValues);

  return(
    <div>
      <div class='p-3'>
        <h1>Поиск</h1>
      </div>
      <div class='filters-row row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 g-5'>   
        <div class='w-60 p-3'>
            <p>По имени:</p>
            <input id="search" type='text' onChange={handleChange}></input>
        </div>
        <div>
            <Slider
                className="horizontal-slider mx-auto"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                value={values}
                min={0}
                max={500}
                onChange={handleRatingChange}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => 'Thumb value ${state.valueNow}'}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                minDistance={100}
            />
            <p>Мин. рейтинг: <span>{values[0]/100}</span></p>
            <p>Макс. рейтинг: <span>{values[1]/100}</span></p>
        </div>
        <div>
            <Slider
                className="horizontal-slider mx-auto"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                value={metacriticRatingBounds}
                min={0}
                max={100}
                onChange={handleMetacriticRatingChange}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => 'Thumb value ${state.valueNow}'}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                minDistance={10}
            />
          <p>Мин. оценка на Метакритик: <span>{metacriticRatingBounds[0]}</span></p>
          <p>Макс. оценка на Метакритик: <span>{metacriticRatingBounds[1]}</span></p>
        </div>
        <div>
            <Slider
                className="horizontal-slider mx-auto"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                value={playtimeBounds}
                min={0}
                max={100}
                onChange={handlePlaytimeBoundsChange}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => 'Thumb value ${state.valueNow}'}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                minDistance={20}
            />
            <p>Мин. время прохождения: <span>{playtimeBounds[0]}</span></p>
            <p>Макс. время прохождения: <span>{playtimeBounds[1]}</span></p>
        </div>
        <DropdownButton className="mb-5" id="dropdown-basic-button" title="All" drop={'down-centered'}>
            <Dropdown.Item onClick={() => changeGenre("Action", 0)}>Action</Dropdown.Item>
            <Dropdown.Item onClick={() => changeGenre("Shooter", 1)}>Shooter</Dropdown.Item>
            <Dropdown.Item onClick={() => changeGenre("Puzzle", 2)}>Puzzle</Dropdown.Item>
        </DropdownButton>
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