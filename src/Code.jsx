import React, {Component} from 'react'
import './css/style.less'
export default class Code extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	render(){
		const code = this.props.colorCode;
		const alpha = this.props.alpha;
		return(
			<div>
				<div>Hex Code:</div>
				<input type="text" id="code" value={code} onChange = {this.handleChange} />
				
			</div>
		);
	}
	handleChange(e){
		this.props.onChange(e.target.value,'code');
	}
}

