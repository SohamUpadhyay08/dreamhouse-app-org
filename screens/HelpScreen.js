import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  RFValue,
  TouchableOpacity,
} from 'react-native';

export default class HelpScreen extends React.Component {
  async navigate() {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}> Help</Text>
          </View>
        </View>
        <View/>
        <View/>
        <View style={{ justifyContent: 'center' }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Bubblegum-Sans',
              fontSize: 20,
            }}>
            this is an real estate app in which you can buy or sell
            properties(flats,houses) for you or your belongings and you can see
            your properties in your properties
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.navigate();
            }}>
            <Text style={{ fontSize: 30 }}>Go to home screen</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#868789',
    alignItems: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 35,
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Bubblegum-Sans',
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#999992',
    alignItems: 'center',
    width: 300,
    height: 50,
    justifyContent: 'center',
    bottom: -100,
    right: -30,
  },
});
