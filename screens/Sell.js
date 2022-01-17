import React, { Component } from 'react';
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
  Button,
  Alert,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts.ttf'),
};

export default class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: 'image_1',
      dropdownHeight: 40,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  async sellProp() {
    if (this.state.cost) {
      let propdata = {
        preview_image: this.state.previewImage,
        cost: this.state.cost,
        seller: firebase.auth().currentUser.displayName,
        posted_on: new Date(),
        status : true,
        buyer : "",
        seller_uid: firebase.auth().currentUser.uid,
      };
      await firebase
        .database()
        .ref('/properties/' + Math.random().toString(36).slice(2))
        .set(propdata)
        .then(function (data) {});
        this.props.navigation.navigate("Selled Properties")
    }else{
      Alert.alert('error', 'cost is required', [
        { text: 'OK', onPress: () => console.log('ok pressed') },
      ])
    }
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      let preview_images = {
        image_1: require('../assets/1BHK.png'),
        image_2: require('../assets/2BHK.png'),
        image_3: require('../assets/3BHK.png'),
        image_4: require('../assets/4BHK.png'),
        image_5: require('../assets/House1.png'),
        image_6: require('../assets/House2.png'),
        image_7: require('../assets/House3.png'),
        image_8: require('../assets/House4.png'),
        image_9: require('../assets/House5.png'),
      };
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/estatelogo.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Sell Property</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <ScrollView>
              <Image
                source={preview_images[this.state.previewImage]}
                style={styles.previewImage}></Image>
              <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                <DropDownPicker
                  items={[
                    { label: '1 BHK flat', value: 'image_1' },
                    { label: '2 BHK flat', value: 'image_2' },
                    { label: '3 BHK flat', value: 'image_3' },
                    { label: '4 BHK flat', value: 'image_4' },
                    { label: 'House 1', value: 'image_5' },
                    { label: 'House 2', value: 'image_6' },
                    { label: 'House 3', value: 'image_7' },
                    { label: 'House 4', value: 'image_8' },
                    { label: 'House 5', value: 'image_9' },
                  ]}
                  defaultValue={this.state.previewImage}
                  containerStyle={{
                    height: 40,
                    borderRadius: 20,
                    marginBottom: 10,
                  }}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
                  style={{ backgroundColor: 'transparent' }}
                  itemStyle={{
                    justifyContent: 'flex-start',
                  }}
                  dropDownStyle={{  backgroundColor: '#868789', }}
                  labelStyle={{
                    color: 'white',
                    fontFamily: 'Bubblegum-Sans',
                  }}
                  arrowStyle={{
                    color: 'white',
                    fontFamily: 'Bubblegum-Sans',
                  }}
                  onChangeItem={(item) =>
                    this.setState({
                      previewImage: item.value,
                    })
                  }
                />
              </View>

              <TextInput
                style={styles.inputFont}
                onChangeText={(reason) => this.setState({ reason })}
                placeholder={'Reason to sell(optional)'}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(cost) => this.setState({ cost })}
                placeholder={'in how much Rs.'}
                keyboardType="numeric"
                placeholderTextColor="white"
              />
            </ScrollView>
          </View>
          <View style={{ flex: 0.08 }} />
          <Button
            title="Submit"
            color="blue"
            onPress={() => {
              this.sellProp();
            }}
          />
        </View>
      );
    }
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
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: 'top',
    padding: RFValue(5),
  },
});
