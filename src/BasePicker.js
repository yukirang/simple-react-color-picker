import React, {Component} from 'react'

import {getLayer} from './utils/color'

export default class BasePicker extends Component{

	constructor(props){
		super(props);
		//this.handleColorChange = this.handleColorChange.bind(this);
		//this.handleClick = this.handleClick.bind(this);
	}
	handleClick(color){
		this.props.onChange(color,'base');
	}

	render(){
		var layers = [];

		for(var i = 0 ; i < 6; i++)
		{
			layers.push(getLayer(i));
		}
		return(
			<div id='BasePicker'>
				Base
				<table  >
					<tbody>
						<tr>
						{
						layers.map((item,index)=>{
							return (<td key={index}>{
								item.map((item,index)=>{
									return (<table width='55' height='10' key={index}><tbody><tr>{
										item.map((item,index)=>{
											return (<td key={item} onClick={this.handleClick.bind(this,item)} style={{backgroundColor:'rgb('+item+')'}}></td>);
										})
									}</tr></tbody></table>);
								})
							}
							</td>
							);
						})
					}
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}