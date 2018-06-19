import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class BasePicker extends Component{

	constructor(props){
		super(props);
		this.handleColorChange = this.handleColorChange.bind(this);

	}
	handleColorChange(color){
		this.props.onColorChange(color);
	}
	render(){
		var layers = [];
		for(var i = 0 ; i < 6; i++)
		{
			layers.push(<Layer key={i} value={i} onColorChange={this.handleColorChange}/>);
		}
		return(
			<div id='BasePicker' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				{layers}
			</div>
		);
	}
}

class RangePicker extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(color,e){
		this.props.onColorChange(color);
	}

		//this.setState({rangeList:this.getRangeList(this.props.baseColor)})
	getRangeList(baseColor){
		var base = baseColor.split(',');
		var rangeTemp = []
		var i;
		for(i = 0; i < 256; i+=2){
			rangeTemp.push(i+','+base[1]+','+base[2]);
		}
		return rangeTemp;
	}
	render(){
		 
		return(
			<div id="RangePicker">
				<table border={0} cellSpacing={0} cellPadding={0} style={{cursor:'pointer'}}>
					<tbody>
						<tr>
							{  

							this.getRangeList(this.props.baseColor).map((item,index)=>{  
								
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

class Color extends Component{
	constructor(props){
		super(props);
		this.handleBaseChange = this.handleBaseChange.bind(this);
		this.handleRangeChange = this.handleRangeChange.bind(this);
	}
	handleBaseChange(color){
		this.props.refreshBaseColor(color);
	}
	handleRangeChange(range){
		this.props.refreshRangeColor(range);
	}
	render(){
		return(
			<div>
				<BasePicker onColorChange={this.handleBaseChange} />
				<RangePicker onColorChange={this.handleRangeChange} baseColor = {this.props.baseColor}/>
			</div>
		);
	}


}

class ColorResult extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div style={{ width:'68px', height:'68px', backgroundColor:''+this.props.color}}>
			</div>
		);
	}
}

class Code extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	render(){
		const code = this.props.colorCode;
		return(
			<input type="text" value={code} onChange = {this.handleChange}/>
		);
	}
	handleChange(e){
		var text = e.target.value;
		this.props.onInputChange(text);
	}
}

class PickerPanel extends Component{
	constructor(props){
		super(props);
		this.state = {
			colorCode: '#000000',
			baseColor: '0,0,0',
			rangeColor: '',
		}
		this.handleBaseChange = this.handleBaseChange.bind(this);
		this.handleRangeChange = this.handleRangeChange.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleBaseChange(color){
		this.setState({baseColor:color});
		this.setState({colorCode:this.getColorCode(color,color)})

	}
	handleRangeChange(range){
		this.setState({range:range});
		this.setState({colorCode:this.getColorCode(this.state.baseColor,range)})
	}
	handleInputChange(code){
		this.setState({colorCode:code})
	}
	getColorCode(baseColor,rangeColor){
		var base = baseColor.split(',');
		var range = rangeColor.split(',');
		return this.toHex(range[0],base[1],base[2]);
	}
	toHex(r,g,b){
		console.log(r+' '+g+' '+b);
		var num = ((r << 16) | (g << 8) | b)
		var hex = num.toString(16);
		while(hex.length < 6){
			 hex = "0" + hex;
		}
		return "#"+hex;
	}

	render(){
		return(
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<Color refreshBaseColor = {this.handleBaseChange} refreshRangeColor={this.handleRangeChange} baseColor = {this.state.baseColor} />
				<ColorResult color = {this.state.colorCode} />
				<Code colorCode = {this.state.colorCode} onInputChange = {this.handleInputChange}/>
			</div>
		);
	}
}


function getExtraColumn(residue){
	var arr=[];
	while(arr.length<residue){
		var v=rand();
		for(var i=0;i<arr.length;i++){
			if(arr[i]==v){v=0;break;}
		}
		if(v!=0){arr.push(v);}
	}
	return arr;
}

function rand(){ 
	return Math.round(Math.randon()*15)+1;
}

class Layer extends Component{
	constructor(props){
		super(props);
	}
	handleClick(color,e){
		this.props.onColorChange(color);
		
	}
	getLayer(index){
		var i,j;
		var r,g,b;
		var currentBase = [0,0,0];
		
		var tempColor = [0,0,0];

		var block = [];
		
		switch(index){
			case 0:
			currentBase = [0,0,0];
			break;
			case 1:	
			currentBase = [51,0,0];
			break;
			case 2:
			currentBase = [102,0,0];
			break;
			case 3:
			currentBase = [153,0,0];
			break;
			case 4:
			currentBase = [204,0,0];
			break;
			case 5:
			currentBase = [255,0,0];
			break;
		}
		tempColor = currentBase.concat();

		for(i = 0;i < 6;i++){
			var tempRow = [];
			tempRow.push(currentBase.toString());
			for(j = 0; j < 5; j++){
				tempColor[1] += 51;
				tempRow.push(tempColor.toString());
			}
			block.push(tempRow);
			currentBase[2] += 51;
			tempColor = currentBase.concat();			
		}
		return block;
	}
	toHex(color){

		return ''+color;
	}
	render() {
		const layerList = this.getLayer(this.props.value);
		return(<div className="layer">
			<table style={{cursor:'pointer'}}>
				<tbody>
				{  
					layerList.map((item,index)=>{  
	                return (<tr key={index}>  
	                  {  
	                     item.map((item,index)=>{  
	                     return <td key={item} width='6' height='6' onClick={this.handleClick.bind(this,item)} style={{backgroundColor:'rgb('+item+')'}}></td>  
	                     })  
	                  }  
	                 </tr>  
	                  )  
              })  
	            }  
				</tbody>
			</table>
		</div>);
	}
}





ReactDOM.render(
	<div>	
 		<PickerPanel />
 	</div>,
 	document.getElementById('root')
)




/*function getBaseColor(){
	var i, j;
	const baseColumn = getBaseColumn();
	for(i = 0; i < 16; i++ ){
			baseColor.push(getRow(baseColumn[i]))
	}		
			
}*/

/*function getBaseColumn(){
	var columnBase = [264,-8,-8];
	var baseColumn = [];
	var i;
	for(i = 0; i < 8; i++){
		columnBase[0] -= 9; 
		columnBase[1] += 8;
		columnBasep[2] += 8;
		baseColumn.push[columnBase];

		columnBase[0] -= 8; 
		columnBase[1] += 9;
		columnBasep[2] += 9;
		baseColumn.push[columnBase];
	}
	return baseColumn;
}*/

/*function getBaseRow(){
	//var color = this.state.currentColor;
	//var channel = this.state.channelState;
	var tempRow = columnBase;
	var i;
	var row = [];
	row.push[columnBase];
	for(i = 0; i < 6; i++){
		switch(channel){
			case 'G+':
				row.push(addBlocks(1,columnBase));
				break;
			case 'R-':
				row.push(minusBlocks(0,columnBase));
				break;
			case 'B+':
				row.push(addBlocks(2,columnBase));	
				break;
			case 'G-':
				row.push(minusBlocks(1,columnBase));
				break;
			case 'R+':
				row.push(addBlocks(0,columnBase));
				break;
			case 'B-':	
				row.push(minusBlocks(2,columnBase));
				break;
		}
	}
	tempRow = row;
}*/

/*function increaseBlock(channel,color){
		var i;
		var tempColor = color;
		var block = [];
		for(i=0; i<5; i++){
			tempColor[channel] += 51;
		}
		return block;
}*/

/*function decreaseBlock(channel,color){
		var i;
		var tempColor = color;
		var block = [];
		for(i=0; i<5; i++){
			tempColor[channel] -= 51;
			block.push(RGB2HEX(tempColor));
		}
		return block;
}
*/
