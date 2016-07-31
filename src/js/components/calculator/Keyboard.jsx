import React from 'react';
import Key from './Key.jsx';

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [
        '1', '2', '3', '4',
        '5', '6', '7', '8',
        '9', '0', 'C', '+',
        '-', '='
      ]
    };
  }

  render() {
    return (
      <div>
        { this.state.keys.map(el => (<Key text={el}/>)) }
      </div>);
  }
}
