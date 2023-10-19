import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Calculator from "./components/Calculator";
import TodoList from "./components/TodoList";

function App() {
  const handleOperatorClick = (value) => {
    console.log(value)
  }
  return (
    <div className="App">
      <div className="outerbox">
        <div className="screen">
          <input type="number" className="calculation" />
        </div>
        <div className="operators">
          <p className='operatorstyle1'>+</p>
          <p className='operatorstyle1'>-</p>
          <p className='operatorstyle1'>*</p>
          <p className='operatorstyle1'>/</p>
        </div>
        <div className="numbers">
          <div className='leftnum'>
            <div className='numstyle'>
              <p className='operatorstyle'>1</p>
              <p className='operatorstyle'>2</p>
              <p className='operatorstyle'>3</p>
            </div>
            <div className='numstyle'>
              <p className='operatorstyle'>4</p>
              <p className='operatorstyle'>5</p>
              <p className='operatorstyle'>6</p>
            </div>
            <div className='numstyle'>
              <p className='operatorstyle'>7</p>
              <p className='operatorstyle'>8</p>
              <p className='operatorstyle'>9</p>
            </div>
            <div className='numstyle2'>
              <p></p>
              <p className='operatorstyle'>0</p>
              <p className='operatorstyle'>AC</p>
            </div>           
          </div>
          <div className='equals'>
            <p className="equalstyle">=</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
