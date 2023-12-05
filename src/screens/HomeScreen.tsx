import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Button,
  PixelRatio,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
type Props = {};
const {width, height} = Dimensions.get('window');
const fontScale = PixelRatio.getFontScale();
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../composables/Metrics';
const getFontSize = size => size / fontScale;
const HomeScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#3AAD96', '#005B49']} style={styles.container}>
      <View>
        <StatusBar hidden />
        <Image
          style={styles.logo}
          source={require('../assets/images/Framemini-nike-white.png')}
        />
        <View style={styles.greenEllipse} />
        <View style={styles.yellowEllipse} />
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            style={styles.image}
            source={require('../assets/images/shoe2.png')}
          />
        </View>
        <View>
          <Text style={styles.title}>Summer Collections</Text>
          <Text style={styles.yearText}>2023</Text>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.description}>
              His ability to control his movement keeps defenders guessing
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ShowShoes')}>
              <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  logo: {
    marginTop: 50,
    marginLeft: 43,
  },
  image: {
    width: horizontalScale(350),
    height: verticalScale(350),
    top: verticalScale(20),
  },
  greenEllipse: {
    width: verticalScale(282),
    height: verticalScale(282),
    position: 'absolute',
    borderRadius: verticalScale(282) / 2,
    right: -verticalScale(282) / 2,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#37C7AA',
  },
  yellowEllipse: {
    width: verticalScale(282),
    height: verticalScale(282),
    position: 'absolute',
    borderRadius: verticalScale(282) / 2,
    left: -verticalScale(282) / 2,
    top: verticalScale(211),
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#ECB903',
  },
  title: {
    fontSize: moderateScale(45),
    fontWeight: 'bold',
    color: '#122A2F',
    position: 'relative',
    left: horizontalScale(49),
    top: verticalScale(20),
    lineHeight: 45,
  },
  yearText: {
    fontSize: moderateScale(45),
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'relative',
    left: horizontalScale(49),
  },
  description: {
    textAlign: 'left',
    width: horizontalScale(300),
    fontSize: moderateScale(20),
  },
  button: {
    backgroundColor: '#ECB903',
    paddingHorizontal: horizontalScale(69),
    paddingVertical: verticalScale(25),
    borderRadius: 37,
    width: horizontalScale(300),
    display: 'flex',
    alignItems: 'center',
    marginVertical: verticalScale(40),
  },
  buttonText: {
    color: '#122A2F',
    fontWeight: 'bold',
    fontSize: moderateScale(20),
  },
});

export default HomeScreen;
