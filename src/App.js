import React from 'react';
import './App.css';


function App() { 
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState([]);

  const handleOperatorClick = (value) => {
     
  }
  const handleNumberClick = (value) => {
    const newInput = input.push(value)
    setInput(newInput);
  }
  const handleAllclearClick = () => {
    console.log();
  }
  const handleEqualsClick = () => {
    console.log();
  }

  return (
    <div className="App">
      <div className="outerbox">
        <div className="screen">
          <input type="number" className="calculation" />
        </div>
        <div className="operators">
          <p className='operatorstyle1' onClick={() => handleOperatorClick('+')}>+</p>
          <p className='operatorstyle1' onClick={() => handleOperatorClick('-')}>-</p>
          <p className='operatorstyle1' onClick={() => handleOperatorClick('*')}>*</p>
          <p className='operatorstyle1' onClick={() => handleOperatorClick('/')}>/</p>
        </div>
        <div className="numbers">
          <div className='leftnum'>
            <div className='numstyle'>
              <p className='operatorstyle' onClick={() => handleNumberClick('1')}>1</p>
              <p className='operatorstyle' onClick={() => handleNumberClick('2')}>2</p>
              <p className='operatorstyle' onClick={() => handleNumberClick('3')}>3</p>
            </div>
            <div className='numstyle'>
              <p className='operatorstyle' onClick={() => handleNumberClick('4')}>4</p>
              <p className='operatorstyle' onClick={() => handleNumberClick('5')}>5</p>
              <p className='operatorstyle' onClick={() => handleNumberClick('6')}>6</p>
            </div>
            <div className='numstyle'>
              <p className='operatorstyle' onClick={() => handleNumberClick('7')}>7</p>
              <p className='operatorstyle' onClick={() => handleNumberClick('8')}>8</p>
              <p className='operatorstyle' onClick={() => handleNumberClick('9')}>9</p>
            </div>
            <div className='numstyle2'>
              <p></p>
              <p className='operatorstyle' onClick={() => handleNumberClick('0')}>0</p>
              <p className='operatorstyle' onClick= {() => handleAllclearClick()}>AC</p>
            </div>           
          </div>
          <div className='equals'>
            <p className="equalstyle"  onClick= {() => handleEqualsClick()}>=</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
