import React, { Component } from "react";
import { StyleSheet, Text, View,SafeAreaView,Platform,Image,StatusBar, } from "react-native";
import firebase from "firebase";

export default class Loading extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("DashboardScreen");
      } else {
        this.props.navigation.navigate("LoginScreen");
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <Image
              source={require('../assets/estatelogo.png')}
              style={styles.appIcon}></Image>
            <Text style={styles.appTitleText}>{`Dreamhouse\nApp`}</Text>
          </View>
           <Text style={styles.appTitleText2}>{`LOADING...`}</Text>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#15193c',
    backgroundColor : '#868789'
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : 35,
  },
  appTitle: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  appTitleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Bubblegum-Sans',
  },
  appTitleText2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Bubblegum-Sans',
  },
});