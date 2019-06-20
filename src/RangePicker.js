import React, {Component} from 'react'
import {getRangeList} from './utils/color'
import './css/style.less'

export default class RangePicker extends Component{
	constructor(props){
		super(props);
	}

	render(){
	var rangeList = getRangeList(this.props.baseColor);	 
		return(
			<div id="range">
				Range
				<table id="range-table">
					<tbody>
						<tr>
							{  
								rangeList.map((item,index)=>{  
									return <td key={item} onClick={() => this.props.onChange(item,'range')} style={{backgroundColor:'rgb('+item+')'}}></td>  
								})  
							} 
						</tr> 
					</tbody>
				</table>
			</div>
		);
	}

}