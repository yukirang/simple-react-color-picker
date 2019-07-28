import React from 'react';

import { getLayer } from '../utils/color';
import '../css/style.css';

const BasePicker = ({ onChange }) => {
  let layers = [];

  for (let i = 0; i < 6; i++) {
    layers.push(getLayer(i));
  }

  const handleChange = e => {
    onChange(e.target.value, 'code');
  };

  return (
    <div id='base-picker'>
      Base
      <table className='base'>
        <tbody>
          <tr>
            {layers.map((item, index) => {
              return (
                <td key={index}>
                  {item.map((item, index) => {
                    return (
                      <table className='base' key={index}>
                        <tbody>
                          <tr>
                            {item.map((item, index) => {
                              return (
                                <td
                                  key={item}
                                  className='block'
                                  value={item}
                                  onClick={onChange}
                                  style={{
                                    backgroundColor: 'rgb(' + item + ')'
                                  }}
                                />
                              );
                            })}
                          </tr>
                        </tbody>
                      </table>
                    );
                  })}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasePicker;
