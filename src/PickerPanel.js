import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import BasePicker from './BasePicker'
import RangePicker from './RangePicker'
import ColorResult from './ColorResult'
import Code from './Code'

import {getColorCode} from './utils/color'

export default class PickerPanel extends Component{
	constructor(props){
		super(props);
		this.state = {
			colorCode: '#000000',
			baseColor: '255,0,0',
			rangeColor: '',
			alpha: ''
		}
		this.handleBaseChange = this.handleBaseChange.bind(this);
		this.handleRangeChange = this.handleRangeChange.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);

	}
	handleBaseChange(color){
		this.setState({baseColor:color, colorCode:getColorCode(color,color)});

	}
	handleRangeChange(range){
		this.setState({range:range, colorCode:getColorCode(this.state.baseColor,range)});
	}
	handleInputChange(code){
		this.setState({colorCode:code})
	}
	

	render(){
		return(
			<div>
				<BasePicker onColorChange={this.handleBaseChange}/>
				<RangePicker onColorChange={this.handleRangeChange} baseColor = {this.state.baseColor} />
				<ColorResult color = {this.state.colorCode} />
				<Code colorCode = {this.state.colorCode} onInputChange = {this.handleInputChange}/>
			</div>
		);
	}
}
// <!--Color refreshBaseColor = {this.handleBaseChange} refreshRangeColor={this.handleRangeChange} baseColor = {this.state.baseColor} /-->