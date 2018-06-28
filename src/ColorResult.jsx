import React, {Component} from 'react'
import './css/style.less'
export default class ColorResult extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id="color-result" style={{backgroundColor:''+this.props.color}}>
			</div>
		);
	}
}