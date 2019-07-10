import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { getAlphaList } from '../utils/color';
import '../css/style.css';

const AlphaPicker = ({ onChange }) => {
  const alphaList = getAlphaList();
  return (
    <div id='AlphaPicker'>
      Alpha
      <table id='alpha-table'>
        <tbody>
          <tr>
            {alphaList.map((item, index) => {
              return (
                <td
                  key={item}
                  onClick={onChange}
                  value={item}
                  style={{ backgroundColor: 'rgba(0,0,0,' + item + ')' }}
                />
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AlphaPicker;
