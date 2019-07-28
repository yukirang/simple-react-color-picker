

This is a simple color picker realized in React

The picker roughly looks like this:

<img src="https://i.imgur.com/f7sR9zj.png" width="40%" align="middle">

You can choose a base color on the layer panel first and then range and/or alpha at bottom.

You can also define your color by typing.

If you're trying to figure out the principle of the web color model, you may refer to:

[RGB 的三维模型与渐变色-颜色系列之一](http://www.cnblogs.com/Free-Thinker/p/5569792.html)

[Web colors - Wikipedia](https://en.wikipedia.org/wiki/Web_colors)

[RGBA color space - Wikipedia](https://en.wikipedia.org/wiki/RGBA_color_space)

## usage

`npm install simple-react-color-picker`

Rendering:

```
import React from 'react'
import ReactDOM from 'react-dom'
import PickerPanel from 'simple-react-color-picker'

...

render(){
	return(
		<div>
			...
 			<PickerPanel />
 		</div>
	)
}

```
