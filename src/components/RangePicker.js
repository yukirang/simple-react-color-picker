import React from 'react';
import { getRangeList } from '../utils/color';
import '../css/style.css';

const RangePicker = ({ onChange, baseColor }) => {
  const rangeList = getRangeList(baseColor);
  return (
    <div id='range-picker'>
      Range
      <table className='range'>
        <tbody>
          <tr>
            {rangeList.map((item, index) => {
              return (
                <td
                  key={item}
                  onClick={onChange}
                  value={item}
                  style={{ backgroundColor: 'rgb(' + item + ')' }}
                />
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RangePicker;
