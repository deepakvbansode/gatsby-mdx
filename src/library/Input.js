import React from 'react';

const Input = ({ color, type }) => (
  <input type={type} style={{ backgroundColor: color }} />
);

export default Input;