import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Color from './utils/color'

export default class Code extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	render(){
		const code = this.props.colorCode;
		return(
			<input type="text" value={code} onChange = {this.handleChange}/>
		);
	}
	handleChange(e){
		var text = e.target.value;
		this.props.onInputChange(text);
	}
}

