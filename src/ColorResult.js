import React, {Component} from 'react'

export default class ColorResult extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div style={{ width:'80px', height:'80px', backgroundColor:''+this.props.color}}>
			</div>
		);
	}
}