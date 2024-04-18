import { useState } from 'react'
import './App.css'
import Cars from './components/Cars';

function App() {

  const myCars = [
    { id: 1, brand: 'Ford', model: 'Mustang', year: 1964, price: 4000 },
    { id: 2, brand: 'Ford', model: 'Fiesta', year: 2019, price: 20000 },
    { id: 3, brand: 'Chevrolet', model: 'Camaro', year: 2018, price: 35000 },
    { id: 4, brand: 'Chevrolet', model: 'Spark', year: 2020, price: 10000 },
    { id: 5, brand: 'Volkswagen', model: 'Gol', year: 2012, price: 15000 },
    { id: 6, brand: 'Volkswagen', model: 'Polo', year: 1999, price: 5000}
  ];

  return (

    <div className='App'>

    <h1> SHOW ROOM 2024</h1>

    <div className='car_container'>
      {myCars.map((car) => (
        <Cars car = {car} />
      ))}
    </div>
    </div>
  )
}

export default App
