import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Color from './utils/color'

export default class RangePicker extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(color,e){
		this.props.onColorChange(color);
	}
	render(){
		 
		return(
			<div id="RangePicker">
				<table border={0} cellSpacing={0} cellPadding={0} style={{cursor:'pointer'}}>
					<tbody>
						<tr>
							{  

							getRangeList(this.props.baseColor).map((item,index)=>{  
								
								return <td key={item} width='3' height='10' onClick={this.handleClick.bind(this,item)} style={{backgroundColor:'rgb('+item+')'}}></td>  
							
							})  
							} 
						</tr> 
					</tbody>
				</table>
			</div>
		);
	}

}