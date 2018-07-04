import chai from 'chai'
import {getLayer} from '../src/utils/color'
import {getRangeList} from '../src/utils/color'
import {getAlphaList} from '../src/utils/color'
import {getColorCode} from '../src/utils/color'
import {getColor} from '../src/utils/color'
import {toHex} from '../src/utils/color'

describe ('toHex test',function(){
	it('black is black',function(){
		chai.expect(toHex(0,0,0)).to.equal('#000000')
	});
	it('white is white',function(){
		chai.expect(toHex(255,255,255)).to.equal('#ffffff')
	});
});

describe ('getColor test',function(){
	it('rgba(255,123,156,0.5)',function(){
		chai.expect(getColor('25,123,156','255,7,15',0.5)).to.equal('rgba(255,123,156,0.5)')
	});
	it('rgba(123,0,233,0.7)',function(){
		chai.expect(getColor('4,0,233','123,4,55',0.7)).to.equal('rgba(123,0,233,0.7)')
	});
});

