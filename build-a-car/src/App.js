import './App.css';
import React from 'react'
import Car from "./components/Car";
import Bicycle from './components/Bicycle';
import Truck from './components/Truck';
import Bus from './components/Bus';
import Skateboard from './components/Skateboard';


export default function App() {
  return (
    <div className="App">
      <Car />
      <Bicycle />
      <Truck />
      <Bus />
      <Skateboard  />
    </div>
  );
}

