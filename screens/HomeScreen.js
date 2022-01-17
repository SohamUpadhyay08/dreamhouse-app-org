import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts2.ttf'),
};
let customFont = {
  'Bubblegum': require('../assets/fonts2.ttf'),
};

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/background.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>DreamHouse App</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Buy')}>
            <Text style={styles.routeText}>Buy</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image
              source={require('../assets/Buy.png')}
              style={styles.iconImage2}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Sell')}>
            <Text style={styles.routeText}>Sell</Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image
              source={require('../assets/Sell.png')}
              style={styles.iconImage2}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Properties')}>
            <Text style={styles.routeText2}>Your Properties</Text>
            <Text style={styles.bgDigit}>3</Text>
            <Image
              source={require('../assets/prop.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.24,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: '#ee18',
  },
  titleBar: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '000099',
    fontFamily: 'Bubblegum-Sans',
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft: 30,
    fontFamily: 'Bubblegum',
  },
  routeText2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft: 30,
    fontFamily: 'Bubblegum',
  },
  bgDigit: {
    position: 'absolute',
    color: '#981112',
    fontSize: 70,
    right: 5,
    bottom: -5,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 70,
    width: 70,
    resizeMode: 'contain',
    right: 10,
    top: -30,
  },
  iconImage2: {
    position: 'absolute',
    height: 75,
    width: 75,
    resizeMode: 'contain',
    right: 5,
    top: -30,
  },
});
