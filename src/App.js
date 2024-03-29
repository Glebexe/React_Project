import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
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

function App(){
    return(
        <div className="App">
            <span className="left">
                <TextInputComponent/>
                <Greeting/>
                <MyCaruosel/>
            </span>
            <span className="right">
                <Search/>
            </span>
        </div>
    );
}

const pics = ['https://sun9-58.userapi.com/impg/rSsXOGJBcFMumKt92EigXvUWUzJtxBU5NQadiQ/xGOcfJfdpwM.jpg?size=1358x906&quality=95&sign=1c482055c469b5b24e53eb15b6d785ed&c_uniq_tag=WjTKFC4PuhjztO1tI_KELrW3EGNPMFU4bIA-EUKWbJ8&type=album','https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-ad371779-5f70-4b90-9647-f5faf320ab1d','https://kartinkof.club/uploads/posts/2022-03/1648267735_47-kartinkof-club-p-khekhe-mem-kot-49.jpg']


const list = [
  {
    name:'Porsche 911 Turbo',
    power: 580,
    gas_tank_volume: 67,
    max_speed: 320,
    fuel_consumption: 11.5,
    image: "https://images.drive.ru/i/0/5e7b211aec05c4921c000014.jpeg"
  },
  {
    name:'Mercedes-Benz C',
    power: 150,
    gas_tank_volume: 52,
    max_speed: 245,
    fuel_consumption: 7.0,
    image: "https://aybaz.ru/wp-content/uploads/b/2/8/b282a365ceb9d1daff03673f66102b96.jpeg"  
  },
  {
    name:'Lamborghini Gallardo',
    power: 550,
    gas_tank_volume: 90,
    max_speed: 325,
    fuel_consumption: 15.7,
    image: "https://i.pinimg.com/originals/a6/47/3d/a6473d3a6f7180c65e13b10d2cf7b9d9.jpg"  
  },
  {
    name:'Ford FSerieso',
    power: 600,
    gas_tank_volume: 120,
    max_speed: 180,
    fuel_consumption: 21.1,
    image: "https://kopotic.com/wp-content/uploads/2014/03/11ForRapt_01.jpg"
  },
  {
    name:'Chery Arrizo 8',
    power: 186,
    gas_tank_volume: 55,
    max_speed: 205,
    fuel_consumption: 6.2,
    image: "https://cdn.motor1.com/images/mgl/1ZzmQ3/s1/chery-arrizo-8---china.jpg"
  },
  {
    name:'Lada Largus',
    power: 90,
    gas_tank_volume: 60,
    max_speed: 160,
    fuel_consumption: 7.5,
    image: "https://autocentr-khimki.ru/static/imgCar/688/2758.jpg?v=10.6"
  },
  {
    name:'Smart Fortwo',
    power: 71,
    gas_tank_volume: 28,
    max_speed: 151,
    fuel_consumption: 4.1,
    image: "https://sportishka.com/uploads/posts/2022-11/1667562335_61-sportishka-com-p-malenkii-mersedes-smart-vkontakte-64.jpg"
  },
  {
    name:'УАЗ-452',
    power: 55.2,
    gas_tank_volume: 80,
    max_speed: 95,
    fuel_consumption: 13,
    image: "https://carsweek.ru/upload/resize_cache/iblock/d67/1200_900_1/d67a50107f1cbbed232f54661cd6f5e6.jpg"
  },

];


function MyCaruosel()
{
    return(
        <div class="carousel" data-bs-theme="dark" variant="dark" style={{width: 600, height: 500}}>          
          <Carousel>
            <Carousel.Item id="blueCarousel">
                <img class="d-block w-100" src={pics[0]} alt="First slide"/>
            </Carousel.Item>

            <Carousel.Item id="greenCarousel">
                <img class="d-block w-100" src={pics[1]} alt="Second slide"/>
            </Carousel.Item>

            <Carousel.Item id="pinkCarousel">
                <img class="d-block w-100" src={pics[2]} alt="Third slide"/>
            </Carousel.Item>
          </Carousel>
        </div>
    );
}

function Search(){
  const[searchTerm, setSearchTerm] = useState('');
  const[minSpeedSearchTerm, setMinSpeedSearchTerm] = useState('');
  const[maxSpeedSearchTerm, setMaxSpeedSearchTerm] = useState(10000);
  
  
  const searchCards = list.filter(function (item){
    return item.name.includes(searchTerm) && (item.max_speed > minSpeedSearchTerm) && (item.max_speed < maxSpeedSearchTerm);
  });
    
  
  
  const handleChange = (event) =>
  {
    setSearchTerm(event.target.value);
  }
  
  const handleMinSpeedChange = (event) =>
  {
    setMinSpeedSearchTerm(event.target.value);
  }
  const handleMaxSpeedChange = (event) =>
  {
    if (event.target.value == '')
        setMaxSpeedSearchTerm(10000);
    else
        setMaxSpeedSearchTerm(event.target.value);
  }
  
  return(
    <div>
      <h1>Поиск</h1>
      <div>
      <label htmlFor='search'>По имени:</label>
      <input id="search" type='text' onChange={handleChange} style={{marginTop:"40px", marginBottom:"40px"}}></input>
      </div>
      <div>
      <label htmlFor='search' style={{marginLeft:"10px"}}>Мин. скорость:</label>
      <input id="search" type='text' onChange={handleMinSpeedChange} style={{marginTop:"40px", marginBottom:"40px"}}></input>
      <label htmlFor='search' style={{marginLeft:"10px"}}>Макс. скорость:</label>
      <input id="search" type='text' onChange={handleMaxSpeedChange} style={{marginTop:"40px", marginBottom:"40px"}}></input>
      </div>
      <ListCars list={searchCards}/>
    </div>
  )
}

const ListCars = (props) =>{
  return(
    <div>
      <Row>
        {props.list.map(function(item)
        {
          return <Col class="col-xl-3">
            <Card>
                <div class="card rounded bg-dark">
                    <div class="card-image">
                        <span><h5>{item.name}</h5></span>
                        <img class="img-fluid" src={item.image}alt="Alternate Text" />
                    </div>
                    <div class="card-image-overlay m-auto">
                      <table class="table table-noborder table-dark">
                          <tbody>
                            <tr>
                              <td>
                                <span calss="info"> 
                                    <i class="bi bi-fuel-pump"></i> {item.gas_tank_volume} л/100 км
                                </span>
                                <div class='helpText'>Расход топлива</div>
                              </td>
                              <td>
                                <span calss="info"> 
                                    <i class="bi bi-speedometer"></i> {item.max_speed} км/ч
                                </span>
                                <div class='helpText'>Макс. скорость</div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span calss="info"> 
                                    <i class="bi bi-rocket-takeoff-fill"></i> {item.power} л.с.
                                      </span>
                                <div class='helpText'>Мощность</div>
                              </td>
                              <td>
                                <span calss="info"> 
                                    <i class="bi bi-slash-square-fill"></i> {item.gas_tank_volume} л
                                            </span>
                                <div class='helpText'>Объем бензобака</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                    </div>
                    <div class="card-body text-center">
                        <button type="button" class="btn btn-outline-light">Подробнее</button>                     
                    </div>
                </div>   

            </Card>
          </Col>
        })}
      </Row>
    </div>
  );
}

export default App;