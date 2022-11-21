import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import React from 'react';

function App() {
  const [nameToShow, setNameToShow] = React.useState('seham')

  const seham =(
        <Header 
        ClassName="header-highlight" 
        name="seham" 
        color="blue" 
        fruit="blueberry" 
        />
  );

  const Tay = <Header name="Tay" color="orange" fruit="orange" />

  return (
    <div className="App">
      <NavBar>
        <li>Homepage</li>
        <li>About</li>
        <li><button onClick={() => setNameToShow("Tay")}>Show Tay</button></li>
        <li><button onClick={() => setNameToShow("Seham")}>Show seham</button></li>
      </NavBar>
      {nameToShow === "Seham" ? seham : Tay}
      <Footer nickname="Jimmy" />
    </div>
  );
}

export { App, Header, Footer };
