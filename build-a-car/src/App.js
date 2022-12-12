import './App.css';
import React from 'react'
import Car from "./components/Car.js";
import Bicycle from './components/Bicycle.js';
import Truck from './components/Truck.js';
import Bus from './components/Bus.js';
import Skateboard from './components/Skateboard.js';


export default function App() {
  return (
    <div className="App">
      <Car numberOfWheels="4"/>
      <Bicycle numberOfWheels="2"/>
      <Truck numberOfWheels="8"/>
      <Bus numberOfWheels="6"/>
      <Skateboard  numberOfWheels="4"/>
    </div>
  );
}

