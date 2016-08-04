
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

const COLOR = {
  BLUE: '#2196f3',
  GREEN: '#8bc34a',
  ORANGE: '#ff9800',
  TEAL: '#009688',
  RED: '#F44336',
  BROWN: '#795548',
  PURPLE: '#673ab7'
}

class Cuadro extends Component {
  render() {
    return (
      <TouchableHighlight style={{backgroundColor: this.props.color, flex: 1, borderWidth: 2,
         flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={this.props.handler}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
}
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
      <View style={styles.container}>
        
        <View style={styles.firstRow}>
          <View style={styles.leftColumn}>
            <Cuadro handler={this.navigate} color={COLOR.BLUE}> 1 </Cuadro>
            <Cuadro color={COLOR.TEAL}> 2 </Cuadro>
          </View>
          
          <View style={styles.rightColumn}>
            <Cuadro color={COLOR.ORANGE}> 3 </Cuadro>
          </View>
        </View>
        
        <View style={styles.secondRow}>
          <View style={styles.bottomLeft}>
            <Cuadro color={COLOR.RED}> 4 </Cuadro>
          </View>

          <View style={styles.bottomCenter}>
            <Cuadro color={COLOR.GREEN}> 5 </Cuadro>
          </View>

          <View style={styles.bottomRight}>
            <Cuadro color={COLOR.BROWN}> 6 </Cuadro>
            <Cuadro color={COLOR.PURPLE}> 7 </Cuadro>
          </View>
          
        </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  firstRow: {
    flex: 6,
    flexDirection: 'row' 
  },
  leftColumn: {
    flex: 2,
  },
  rightColumn: {
    flex: 4,
  },
  secondRow: {
    flex: 3,
    flexDirection: 'row'
  },
  bottomLeft: {
    flex: 2,

  },
  bottomRight: {
    flex: 1,
    flexDirection: 'column',
  },

  bottomCenter: {
    flex: 3
  },
});

AppRegistry.registerComponent('NavigatorExample', () => NavigatorExample);
