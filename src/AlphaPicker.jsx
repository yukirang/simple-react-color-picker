import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {getAlphaList} from './utils/color'
/*import {withSubscription} from './helper/eventHandler'*/
import './css/style.less'
 
export default class AlphaPicker extends Component{
	constructor(props){
		super(props);
		//this.handleClick = this.handleClick.bind(this);
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
/*type Props = {
  onClick: (item) => void,
}

class Alpha extends Component{
	render(){
		var alphaList = getAlphaList();	
		const handleClick = this.props;		
		//console.log(alphaList); 
		return(
			<div id="AlphaPicker">
				Alpha
				<table width='350' height='15' border={0} cellSpacing={0} cellPadding={0} style={{cursor:'pointer',margin: '0',padding: '0'}}>
					<tbody>
						<tr>
							{  
							alphaList.map((item,index)=>{  
								return <td key={item} onClick={props.onClick(item)} style={{backgroundColor:'rgba(0,0,0,'+item+')'}}></td>  
							})  
							} 
						</tr> 
					</tbody>
				</table>
			</div>
		);
	}
}

const AlphaPicker = withSubscription(Alpha,'alpha');

export default AlphaPicker;*/