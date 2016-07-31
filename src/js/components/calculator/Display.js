import React from 'react';

const Display = ({ text }) => (<div>{text}</div>);

Display.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Display;
