import React from 'react';
import '../css/style.css';

const ColorResult = ({ color }) => {
  return <div id='color-result' style={{ backgroundColor: '' + color }} />;
};

export default ColorResult;
