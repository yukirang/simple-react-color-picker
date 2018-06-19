import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Color from './utils/color'

export default class ColorResult extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div style={{ width:'68px', height:'68px', backgroundColor:''+this.props.color}}>
			</div>
		);
	}
}