/**
 * Sample touchable button 
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class TouchableExample extends Component {

  constructor(props) {
    super(props);

    this._onPressIn = this._onPressIn.bind(this);
    this._onPressOut = this._onPressOut.bind(this);

    this.state = {
      pressed: false
    }
  }

  _onPressIn() {
    this.setState({
      pressed: true
    })
  }

  _onPressOut() {
    this.setState({
      pressed:false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TouchableHighlight 
          style={styles.touchable} 
          onPressIn={this._onPressIn} 
          onPressOut={this._onPressOut} >
          
          <View style={styles.button}> 
            <Text style={styles.welcome}>
              {this.state.pressed ? 'MEEEPH!!' : 'PUSH ME'}
            </Text>
          </View>
        
        </TouchableHighlight>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  touchable: {
    borderRadius: 100,
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 100,
    height: 200,
    width: 200,
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('touchableExample', () => TouchableExample);
