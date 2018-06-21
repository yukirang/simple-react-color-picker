import React, {Component} from 'react'
import {getRangeList} from './utils/color'
import './css/style.css'

export default class RangePicker extends Component{
	constructor(props){
		super(props);
		//this.handleClick = this.handleClick.bind(this);
	}
	handleClick(color){
		this.props.onChange(color,'range');
	}
	render(){
	var rangeList = getRangeList(this.props.baseColor);	 
		return(
			<div id="RangePicker">
				Range
				<table width='350' height='15' border={0} cellSpacing={0} cellPadding={0} style={{cursor:'pointer'}}>
					<tbody>
						<tr>
							{  
								rangeList.map((item,index)=>{  
									return <td key={item} onClick={this.handleClick.bind(this,item)} style={{backgroundColor:'rgb('+item+')'}}></td>  
								})  
							} 
						</tr> 
					</tbody>
				</table>
			</div>
		);
	}

}