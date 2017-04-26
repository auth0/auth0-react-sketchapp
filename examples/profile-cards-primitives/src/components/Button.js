/* @flow */
import React from 'react';
import { View } from 'react-primitives';
import { fonts, buttons } from '../designSystem';
import { Text } from 'react-sketchapp';
import type { Color } from '../processColor';



const Button = ({ name, type, size, style }: P) => (
  <View style={{
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    ...buttons.types[type] || buttons.types['Primary'],
    ...buttons.sizes[size] || buttons.sizes['Medium'],
    ...style
  }}>
    <View style={{
        marginTop: (size === 'Micro') ? -4 : -8
      }}>
      <Text style={{
        ...fonts['Small Caps'],
        color: buttons.types[type].color,
        fontSize: buttons.sizes[size].fontSize,
        borderWidth: 0,
        marginBottom: 0,
        letterSpacing: 1,
        fontWeight: '600'
      }}>{name.toUpperCase()}</Text>
    </View>
  </View>
);

export default Button;
