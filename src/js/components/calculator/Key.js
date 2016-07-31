import React from 'react';

const Key = ({ onClick, text }) => (
  <div onClick={onClick}>{text}</div>
);

Key.propTypes = {
  text: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Key;
