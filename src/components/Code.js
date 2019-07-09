import React from 'react';
import '../css/style.css';
const Code = ({ code, alpha, onChange }) => {
  // const code = this.props.colorCode;
  // const alpha = this.props.alpha;
  const handleChange = e => {
    e.preventDefault();
    onChange(e.target.value, 'code');
  };
  return (
    <div>
      <div>Hex Code:</div>
      <input type='text' id='code' value={code} onChange={handleChange} />
    </div>
  );
};

export default Code;
