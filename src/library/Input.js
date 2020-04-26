import React from 'react';

const Input = ({ color, type, value }) => (
  <input type={type} style={{ backgroundColor: color }} value={value}/>
);

export default Input;