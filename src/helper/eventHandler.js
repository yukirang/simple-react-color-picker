import React, { Component } from 'react'
import {compose, withHandlers} from 'recompose'

export const withSubscription = compose(
		withHandlers({
			onClick: props => event => {
      		event.preventDefault()
      		console.log(event.target.value)
    	}
	})
)