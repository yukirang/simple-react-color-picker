import React, {Component} from 'react'
import BasePicker from './BasePicker'
import RangePicker from './RangePicker'
import AlphaPicker from './AlphaPicker'
import ColorResult from './ColorResult'
import Code from './Code'

import {getColorCode} from './utils/color'
import {getColor} from './utils/color'

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
				<Code colorCode = {this.state.colorCode} onChange = {this.onChange}/>
				<ColorResult color = {this.state.color===1000?this.state.colorCode:this.state.color} />
				
			</div>
		);
	}
}

PickerPanel.defaultProps = {
  defaultCode: '#fff',
  defaultBase: '255,0,0',
  defaultRange: '0,255,255',
  defaultAlpha: 1000,
  onChange() {},
  style: {},
};