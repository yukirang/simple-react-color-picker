import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {getAlphaList} from './utils/color'
/*import {withSubscription} from './helper/eventHandler'*/
import './css/style.less'
 
export default class AlphaPicker extends Component{
	constructor(props){
		super(props);
	}
	render(){
		var alphaList = getAlphaList();			
		//console.log(alphaList); 
		return(
			<div id="AlphaPicker" >
				Alpha
				<table id="alpha-table">
					<tbody>
						<tr>
							{  
							alphaList.map((item,index)=>{  
								return <td key={item} onClick={() => this.props.onChange(item,'alpha')} style={{backgroundColor:'rgba(0,0,0,'+item+')'}}></td>  
							})  
							} 
						</tr> 
					</tbody>
				</table>
			</div>
		);
	}

}

