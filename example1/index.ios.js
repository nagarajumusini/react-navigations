import React, { Component } from 'react'
import {
   AppRegistry,
   View
} from 'react-native'
import Router from './src/components/Router'

class navigation extends Component {
   render() {
      return (
         <Router />
      )
   }
}

AppRegistry.registerComponent('navigation', () => navigation)