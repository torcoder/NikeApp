import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../composables/Metrics';
import LinearGradient from 'react-native-linear-gradient';
import {useAnimatedValue} from 'react-native';
const images = [
  require('../assets/images/shoe2.png'),
  require('../assets/images/big-shoe-orange.png'),
  require('../assets/images/big-shoe-blue.png'),
];

const ShowShoesScreen = ({navigation}) => {
  const [activeImage, setActiveImage] = useState(0);
  const opacity = useAnimatedValue(0);

  React.useEffect(() => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [activeImage, opacity]);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.iconBackground}>
              <Image
                style={styles.icon}
                source={require('../assets/images/arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <Image
            source={require('../assets/images/Framemini-nike-black.png')}
          />
          <View style={styles.iconBackground}>
            <Image source={require('../assets/images/option1.png')} />
          </View>
        </View>
        <View style={styles.shoeBar}>
          <TouchableOpacity onPress={() => setActiveImage(0)}>
            <View
              style={[
                styles.shoeBackground,
                {backgroundColor: activeImage === 0 ? '#ECB903' : '#F3F3F3'},
              ]}>
              <Image
                style={styles.icon}
                source={require('../assets/images/mini-shoe-green.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveImage(1)}>
            <View
              style={[
                styles.shoeBackground,
                {backgroundColor: activeImage === 1 ? '#ECB903' : '#F3F3F3'},
              ]}>
              <Image
                style={styles.icon}
                source={require('../assets/images/2-11mini-shoe-orange.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveImage(2)}>
            <View
              style={[
                styles.shoeBackground,
                {backgroundColor: activeImage === 2 ? '#ECB903' : '#F3F3F3'},
              ]}>
              <Image
                style={styles.icon}
                source={require('../assets/images/3-11mini-shoe-blue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Animated.Image
            style={(styles.image, {opacity: opacity})}
            source={images[activeImage]}
          />
          <View
            style={{
              position: 'relative',
              alignItems: 'center',
            }}>
            <View style={{top: horizontalScale(10), alignItems: 'center'}}>
              <Image
                style={styles.option}
                source={require('../assets/images/option.png')}
              />

              <View
                style={{
                  width: horizontalScale(10),
                  height: horizontalScale(10),
                  backgroundColor: '#ECB903',
                  borderRadius: 10,
                  zIndex: 2,
                  position: 'relative',
                  top: -horizontalScale(5),
                }}
              />
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.zoomIconBg}>
                <Image
                  style={styles.zoomIcon}
                  source={require('../assets/images/zoomicon.png')}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Zoom Freak</Text>
          <Text style={styles.subTitle}>Basketball Shoes</Text>
          <Text style={styles.description}>
            There has never been a player like Giannis. His freakishly athletic
            game combines massive strides,
          </Text>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={{fontSize: moderateScale(24), color: '#122A2F'}}>
              Price
            </Text>
            <Text
              style={{
                fontSize: moderateScale(45),
                color: '#122A2F',
                fontWeight: 'bold',
              }}>
              $180
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              columnGap: horizontalScale(19),
              marginTop: verticalScale(10),
            }}>
            <LinearGradient
              colors={['rgba(18, 42, 47, 0)', 'rgba(18, 42, 47, 1)']}
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.5, y: 1.0}}
              locations={[0, 0.0]}
              style={{
                width: horizontalScale(80),
                height: horizontalScale(80),
                borderRadius: 80,
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/images/Group6.png')} />
            </LinearGradient>
            <LinearGradient
              colors={['#3AAD96', '#005B49']}
              style={{
                width: horizontalScale(80),
                height: horizontalScale(80),
                borderRadius: 80,
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: horizontalScale(10),
                  height: horizontalScale(10),
                  backgroundColor: '#ECB903',
                  borderRadius: 10,
                  zIndex: 2,
                  position: 'absolute',
                  top: horizontalScale(18),
                  right: horizontalScale(18),
                }}
              />
              <Image source={require('../assets/images/Group5.png')} />
            </LinearGradient>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ShowShoesScreen;

const styles = StyleSheet.create({
  topBar: {
    marginTop: verticalScale(40),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: horizontalScale(98),
  },
  iconBackground: {
    backgroundColor: '#F3F3F3',
    height: verticalScale(48),
    width: verticalScale(48),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: verticalScale(48),
  },
  shoeBar: {
    marginTop: verticalScale(40),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: horizontalScale(21),
  },
  shoeBackground: {
    height: verticalScale(93),
    width: verticalScale(93),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: verticalScale(20),
  },
  image: {
    width: horizontalScale(280),
    height: verticalScale(280),
    top: verticalScale(40),
  },
  option: {},
  zoomIconBg: {
    width: verticalScale(56),
    height: verticalScale(56),
    backgroundColor: '#37C7AA',
    borderRadius: 56,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: -verticalScale(28),
  },
  zoomIcon: {
    width: horizontalScale(25),
    height: horizontalScale(25),
  },
  title: {
    fontSize: moderateScale(45),
    fontWeight: 'bold',
    color: '#122A2F',
    position: 'relative',
    left: horizontalScale(37),
    top: verticalScale(20),
    lineHeight: 45,
  },
  subTitle: {
    fontSize: moderateScale(24),
    color: '#122A2F',
    position: 'relative',
    left: horizontalScale(37),
    marginTop: verticalScale(14),
    marginBottom: verticalScale(14),
  },
  description: {
    textAlign: 'left',
    width: horizontalScale(320),
    fontSize: moderateScale(17),
    position: 'relative',
    left: horizontalScale(34),
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: horizontalScale(40),
    marginTop: verticalScale(30),
    marginBottom: verticalScale(60),
  },
});
