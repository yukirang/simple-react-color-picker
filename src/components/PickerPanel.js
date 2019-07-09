import React, { Component } from 'react';
import BasePicker from '../components/BasePicker';
import RangePicker from '../components/RangePicker';
import AlphaPicker from '../components/AlphaPicker';
import ColorResult from '../components/ColorResult';
import Code from '../components/Code';

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

    // this.onChange = this.onChange.bind(this);
  }

  onChange = ({ item, type }) => {
    // var range = this.state.rangeColor;
    // var base = this.state.baseColor;
    // var alpha = this.state.alpha;
    const { range, base, alpha } = this.state;
    switch (type) {
      case 'base':
        this.setState({
          baseColor: item,
          colorCode: getColorCode(item, item),
          color: getColor(item, item, alpha)
        });
        break;
      case 'range':
        this.setState({
          rangeColor: item,
          colorCode: getColorCode(base, item),
          color: getColor(base, item, alpha)
        });
        break;
      case 'code':
        this.setState({ colorCode: item, color: item });
        break;
      case 'alpha':
        this.setState({ alpha: item, color: getColor(base, range, item) });
        break;
    }
  };

  render() {
    return (
      <div>
        <BasePicker onChange={this.onChange} />
        <RangePicker
          onChange={this.onChange}
          baseColor={this.state.baseColor}
        />
        <AlphaPicker onChange={this.onChange} />
        <div id='result'>
          <Code
            colorCode={this.state.colorCode}
            alpha={this.state.alpha}
            onChange={this.onChange}
          />
          <ColorResult color={this.state.color === 0 ? 0 : this.state.color} />
          {this.state.alpha}
        </div>
      </div>
    );
  }
}

// PickerPanel.defaultProps = {
//   defaultCode: '#ffffff',
//   defaultBase: '0,255,255',
//   defaultRange: '255,0,0',
//   defaultAlpha: 0,
//   defaultColor: '',
//   onChange() {},
//   style: {}
// };
