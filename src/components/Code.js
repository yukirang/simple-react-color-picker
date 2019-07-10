import React from 'react';
import '../css/style.css';
const Code = ({ colorCode, alpha, onChange }) => {
  return (
    <div>
      <div>Hex Code:</div>
      <input
        type='text'
        id='code'
        value={colorCode}
        type='code'
        onChange={onChange}
      />
    </div>
  );
};

export default Code;
