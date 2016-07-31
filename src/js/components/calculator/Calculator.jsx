import React from 'react';
import Keyboard from './Keyboard.jsx';
import Display from './Display.jsx';

export default class Calculator extends React.Component {
  render() {
    return (
      <div>
        <Display text='Kalkulator'/>
          <Keyboard/>
      </div>);
  }
}
