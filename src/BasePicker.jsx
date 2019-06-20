import React, {Component} from 'react'

import {getLayer} from './utils/color'
import './css/style.less'

export default class BasePicker extends Component{

	constructor(props){
		super(props);
	}
	render(){
		let layers = [];

		for(let i = 0 ; i < 6; i++)
		{
			layers.push(getLayer(i));
		}
		return(
			<div id='BasePicker'>
				Base
				<table className="base">
					<tbody>
						<tr>
						{
						layers.map((item,index)=>{
							return (<td key={index}>{
								item.map((item,index)=>{
									return (<table className="base" key={index}><tbody><tr>{
										item.map((item,index)=>{
											return (<td key={item} className="block" onClick={() => this.props.onChange(item,'base')} style={{backgroundColor:'rgb('+item+')'}}></td>);
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