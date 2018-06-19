import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {getLayer} from './utils/color'

export default class BasePicker extends Component{

	constructor(props){
		super(props);
		//this.handleColorChange = this.handleColorChange.bind(this);
		//this.handleClick = this.handleClick.bind(this);
	}
	handleClick(color){
		this.props.onColorChange(color);
	}

	render(){

		var layers = [];

		for(var i = 0 ; i < 6; i++)
		{
			layers.push(getLayer(i));
		}
		return(
			<div id='BasePicker'>
				
						{
						layers.map((item,index)=>{
							return (<div key={index}><table><tbody>{
								item.map((item,index)=>{
									return (<tr key={index}>{
										item.map((item,index)=>{
											return (<td key={item} width='6' height='6' onClick={this.handleClick.bind(this,item)} style={{backgroundColor:'rgb('+item+')'}}></td>);
										})
									}</tr>);
								})
							}
							</tbody></table></div>
							);
						})
					}				
			</div>
		);
	}
}