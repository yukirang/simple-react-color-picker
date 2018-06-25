import React, {Component} from 'react'
import BasePicker from './BasePicker'
import RangePicker from './RangePicker'
import AlphaPicker from './AlphaPicker'
import ColorResult from './ColorResult'
import Code from './Code'

import {getColorCode} from './utils/color'
import {getColor} from './utils/color'

import './css/style.less'


export default class PickerPanel extends Component{
	constructor(props){
		super(props);
		this.state = {
			colorCode: props.defaultCode,
			baseColor: props.defaultBase,
			rangeColor: props.defaultRange,
			alpha: props.defaultAlpha,
			color: ''
		}
		//this.handleBaseChange = this.handleBaseChange.bind(this);
		//this.handleRangeChange = this.handleRangeChange.bind(this);
		//this.handleInputChange = this.handleInputChange.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	/*handleBaseChange(base){
		this.setState({baseColor:base, colorCode:getColorCode(base,base)});
	}
	handleRangeChange(range){
		this.setState({range:range, colorCode:getColorCode(this.state.baseColor,range)});
	}
	handleInputChange(code){
		this.setState({colorCode:code})
	}*/
	onChange(item,type){
		var range = this.state.rangeColor;
		var base = this.state.baseColor;
		var alpha = this.state.alpha;
		switch(type){
			case 'base':
				this.setState({
					baseColor:item, 
					colorCode:getColorCode(item,item), 
					color:getColor(item,item,alpha)
				});
				break; 
			case 'range':				
				this.setState({
					rangeColor:item, 
					colorCode:getColorCode(base,item),
					color:getColor(base,item,alpha)
				});
				break;
			case 'code':
				this.setState({colorCode:item,color:item});
				break;	
			case 'alpha':
				this.setState({alpha:item,color:getColor(base,range,item)});
				break;		
		}
	}


	render(){
		return(
			<div>
				<BasePicker onChange={this.onChange}/>
				<RangePicker onChange={this.onChange} baseColor = {this.state.baseColor} />
				<AlphaPicker onChange={this.onChange} />
				<div id="result">
					<Code colorCode = {this.state.colorCode} alpha = {this.state.alpha} onChange = {this.onChange}/>
					<ColorResult color = {this.state.color===0?this.state.colorCode:this.state.color}/>
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
  onChange() {},
  style: {},
};