import React from 'react';

const Button = ({ color, type, children }) => (
  <button type={type} style={{ backgroundColor: color }}>
    {children}
  </button>
);

export default Button;