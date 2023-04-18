
import React, { useState } from 'react';
import './App.css';

function App() {
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState('');
  const [prevResult, setPrevResult] = useState('');

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === 'Clear') {
      setCalculation('');
      setResult('');
    } else if (buttonValue === 'Delete') {
      setCalculation(calculation.slice(0, -1));
    } else if (buttonValue === '=') {
      const newCalculation = calculation + '=' + eval(calculation);
      setPrevResult(newCalculation);
      setResult(eval(calculation));
      setCalculation(newCalculation);
    } else {
      if (calculation === '0' && /\d/.test(buttonValue)) {
        setCalculation(buttonValue);
      } else if (calculation === '' && buttonValue === '0') {
        setCalculation('');
      } else {
        setCalculation(calculation + buttonValue);
      }
    }
  };

  
  return (
  
      <div className="container"> 
        <header> <h1>Simple React Calculator</h1></header>
       
    <div className="calculator">

      <div className="calculator__result">
      
        <div className="calculator__result__exp">   {calculation === '' ? '0' : calculation} </div>
      </div>
      <div className="calculator__btns">
        <button onClick={() => handleButtonClick('Clear')}>C</button>
        <button onClick={() => handleButtonClick('Delete')}>Del</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="btn__op" onClick={() => handleButtonClick('/')}>
          /
        </button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className="btn__op" onClick={() => handleButtonClick('*')}>
          *
        </button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className="btn__op" onClick={() => handleButtonClick('-')}>
          -
        </button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className="btn__op" onClick={() => handleButtonClick('+')}>
          +
        </button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button className="btn__op" onClick={() => handleButtonClick('=')}>
          =
        </button>
      </div>
    </div>
    <footer>
  <p>Created by Piyush Kukade | Check out my GitHub at <a href="https://github.com/piyushk1/">https://github.com/piyushk1/</a></p>
</footer>


    </div>
  );
}

export default App;
