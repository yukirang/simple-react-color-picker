
This is a simple color picker realized by React and raw javascript.

The picker roughly looks like this:

![image](https://github.com/yukirang/color-picker/blob/master/src/images/picker.png)

You can choose a base color on the layer panel first and then range and/or alpha at bottom.

You can also define your color by typing.

If you're tryting to figure out the principle of the web color model, you may refer to:

[RGB的三维模型与渐变色-颜色系列之一](http://www.cnblogs.com/Free-Thinker/p/5569792.html)

[Web colors - Wikipedia](https://en.wikipedia.org/wiki/Web_colors)

[RGBA color space - Wikipedia](https://en.wikipedia.org/wiki/RGBA_color_space)


## usage

`npm install simple-react-color-picker`

In your jsx file:

```
import React from 'react'`
import ReactDOM from 'react-dom'`
import ColorPicker from 'simple-react-color-picker`

...

ReactDOM.render(
	<div>	
 		<PickerPanel />
 	</div>,
 	document.getElementById('root')
)
```


## test
`NODE_ENV=development npm test`




