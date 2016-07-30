import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button/Button.jsx';
import Calculator from './components/calculator/Calculator.jsx';
import CalcStore from './stores/CalculatorStore';

ReactDOM.render(<Calculator />, document.getElementById('test'));
console.log(CalcStore.getState());