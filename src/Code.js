import React, {Component} from 'react'

export default class Code extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	render(){
		const code = this.props.colorCode;
		return(
			<div>
				Hex Code:
				<input type="text" value={code} onChange = {this.handleChange} />
			</div>
		);
	}
	handleChange(e){
		this.props.onChange(e.target.value,'code');
	}
}

