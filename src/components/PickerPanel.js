import React, { Component } from 'react';
import BasePicker from './BasePicker';
import RangePicker from './RangePicker';
import AlphaPicker from './AlphaPicker';
import ColorResult from './ColorResult';
import Code from './Code';

import { getColorCode } from '../utils/color';
import { getColor } from '../utils/color';

import '../css/style.css';

export default class PickerPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorCode: '#ffffff',
      baseColor: '0,255,255',
      rangeColor: '255,0,0',
      alpha: 0,
      color: ''
    };
  }

  onBaseChange = e => {
    console.log(e.target);
    const { alpha } = this.state;
    const baseColor = e.target.getAttribute('value');
    this.setState({
      baseColor: baseColor,
      colorCode: getColorCode(baseColor, baseColor),
      color: getColor(baseColor, baseColor, alpha)
    });
  };

  onRangeChange = e => {
    const { baseColor, alpha } = this.state;
    console.log(e.target);

    const rangeColor = e.target.getAttribute('value');
    console.log(rangeColor);
    this.setState({
      rangeColor: rangeColor,
      colorCode: getColorCode(baseColor, rangeColor),
      color: getColor(baseColor, rangeColor, alpha)
    });
  };

  onAlphaChange = e => {
    const { rangeColor, baseColor } = this.state;
    const alpha = e.target.getAttribute('value');
    this.setState({
      alpha: alpha,
      color: getColor(baseColor, rangeColor, alpha)
    });
  };

  onCodeChange = e => {
    const code = e.target.value;
    this.setState({ colorCode: code, color: code });
  };

  render() {
    return (
      <div>
        <BasePicker onChange={this.onBaseChange} />
        <RangePicker
          onChange={this.onRangeChange}
          baseColor={this.state.baseColor}
        />
        <AlphaPicker onChange={this.onAlphaChange} />
        <div id='result'>
          <Code
            colorCode={this.state.colorCode}
            alpha={this.state.alpha}
            onChange={this.onCodeChange}
          />
          <ColorResult color={this.state.color === 0 ? 0 : this.state.color} />
          {this.state.alpha}
        </div>
      </div>
    );
  }
}

PickerPanel.defaultProps = {
  defaultCode: '#ffffff',
  defaultBase: '0,255,255',
  defaultRange: '255,0,0',
  defaultAlpha: 0,
  defaultColor: '',
  onChange() {},
  style: {}
};
