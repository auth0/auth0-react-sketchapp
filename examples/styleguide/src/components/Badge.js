/* @flow */
import React from 'react';
import designSystem from '../designSystem';
import { View, Text } from 'react-sketchapp';

type P = {
  filled?: boolean,
  children?: React$Element<any>,
};


const Badge = ({ children, filled, color }: P) => (
  <View
    style={{
      borderRadius: 3,
      backgroundColor: filled ? '#333' : 'transparent',
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: 3,
      marginTop: 8,
      borderWidth: 1,
      borderColor: '#333'
    }}
  >
    <Text
      style={{
        ...designSystem.fonts['Small Caps'],
        marginTop: -3,
        color: color
      }}
    >
      {children.toUpperCase()}
    </Text>
  </View>
);

export default Badge;
