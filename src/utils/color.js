export const getLayer = index => {
  let i, j;
  let currentBase = [0, 0, 0];

  let tempColor = [0, 0, 0];

  let block = [];

  currentBase = [index * 51, 0, 0];
  tempColor = currentBase.concat();

  for (i = 0; i < 6; i++) {
    let tempRow = [];
    tempRow.push(currentBase.toString());
    for (j = 0; j < 5; j++) {
      tempColor[1] += 51;
      tempRow.push(tempColor.toString());
    }
    block.push(tempRow);
    currentBase[2] += 51;
    tempColor = currentBase.concat();
  }
  return block;
};

export const toHex = (r, g, b) => {
  const num = (r << 16) | (g << 8) | b;
  let hex = num.toString(16);
  while (hex.length < 6) {
    hex = '0' + hex;
  }
  return '#' + hex;
};

export const getColorCode = (baseColor, rangeColor) => {
  //console.log(baseColor);
  const base = baseColor.split(',');
  const range = rangeColor.split(',');
  return toHex(range[0], base[1], base[2]);
};

export const getRangeList = baseColor => {
  const base = baseColor.split(',');
  let rangeTemp = [];
  let i;
  for (i = 0; i < 256; i += 3) {
    rangeTemp.push(i + ',' + base[1] + ',' + base[2]);
  }
  return rangeTemp;
};

export const getAlphaList = () => {
  let alphaTemp = [];
  let i;
  for (i = 0; i <= 1; i += 0.01) {
    alphaTemp.push(Math.round(i * 100) / 100);
  }
  return alphaTemp;
};

export const getColor = (baseColor, rangeColor, alpha) => {
  const base = baseColor.split(',');
  const range = rangeColor.split(',');
  return 'rgba(' + range[0] + ',' + base[1] + ',' + base[2] + ',' + alpha + ')';
};

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
