
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

/**
 * Auxiliar component
 */
class Main extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  /**
   * Go to the Page 2
   */
  navigate() {
    this.props.navigator.push({
      id: 'Page 2'
    });
  }

  render() {
    return (
      <View>
        <Text>Hello David, this is the main view</Text>
        <TouchableHighlight onPress={this.navigate}>
          <Text>
            Go to the next page mate!
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

}

/**
 * Auxiliar component
 */
class P2 extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Go back to the previous page
   */
  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View>
        <Text>
          Hello mate, you are in the page 2
        </Text>
        <Text onPress={this.goBack}> {'<<'} </Text>
      </View>
    );
  }
}

class NavigatorExample extends Component {

  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this);

  }

  /**
   * This methods works like a router
   * i.g Express router (Backend analogy)
   */
  renderScene(route, navigator) {
    if(route.id == 'Main') {
      return <Main navigator={navigator} />
    } else if(route.id == 'Page 2') {
      return <P2 navigator={navigator} />
    }
  }

  render() {
    return(
      <Navigator 
        initialRoute={{ id: 'Main' }}//The component that is rendered by default
        renderScene={this.renderScene}
      />
    )
  }


}

AppRegistry.registerComponent('NavigatorExample', () => NavigatorExample);
