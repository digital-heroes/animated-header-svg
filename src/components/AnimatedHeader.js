import React from 'react';
import { Animated, Dimensions, StatusBar } from 'react-native'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const screenWidth = Dimensions.get('window').width;
const height = (32 * screenWidth) / 64;

const AnimatedHeader = ({ children, curve }) => {
  return (
    <Svg
      height={height}
      viewBox="0 0 64 32"
      fill="transparent"
    >
      <Defs>
        <LinearGradient id="gradient" x1="0" y1="0" x2="64" y2="0">
          <Stop offset="0" stopColor="#CBA668" />
          <Stop offset="1" stopColor="#DDBD80"/>
        </LinearGradient>
      </Defs>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <AnimatedPath fill="url(#gradient)" d={curve} />
      {children}
    </Svg>
  );
};

export default AnimatedHeader;
