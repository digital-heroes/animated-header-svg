import React, { Component, Fragment } from 'react';
import { Animated, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import AnimatedHeader from './components/AnimatedHeader';
import WomanPicture from './assets/images/woman.png';

const scrollPos = Dimensions.get('window').height / 4;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  render() {
    const { scrollY } = this.state;
    const curve = scrollY.interpolate({
      inputRange: [0, scrollPos],
      outputRange: [
        'M0 0 L64 0 L64 22 C48 32 16 32 0 22 Z',
        'M0 0 L64 0 L64 20 C48 20 16 20 0 20 Z',
      ],
      extrapolate: 'clamp',
    });
    return (
      <Fragment>
        <AnimatedHeader style={styles.header} curve={curve}>
          <View style={styles.headerContainer}>
            <Text style={styles.welcome}>Fund</Text>
            <Image style={styles.avatar} source={WomanPicture}/>
          </View>
        </AnimatedHeader>
        <ScrollView
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } },
          ])}
          scrollEventThrottle={16}
        >
          <ScrollView
            contentContainerStyle={styles.container}
          >
            <Text style={{ marginBottom: 300 }}>To get started, edit App.js</Text>
            <Text style={{ marginBottom: 300 }}>To get started, edit App.js</Text>
            <Text style={{ marginBottom: 300 }}>To get started, edit App.js</Text>
            <Text style={{ marginBottom: 300 }}>To get started, edit App.js</Text>
          </ScrollView>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 34,
    textAlign: 'left',
    fontWeight: '700',
    color: '#ffffff'
  },
  avatar: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
    borderRadius: 22
  }
});
