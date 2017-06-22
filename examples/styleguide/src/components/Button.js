/* @flow */
import React from 'react';
import { View, StyleSheet, Image } from 'react-sketchapp';
import { fonts, buttons, spacing } from '../designSystem';
import { Text } from 'react-sketchapp';
import type { Color } from '../processColor';

//To-do
//With image/icon


const styles = StyleSheet.create({
  image: {
    height: 14,
    width: 14,
    top: 2,
    marginRight: spacing
  }
});

const Button = ({ name, type, size, style, invert }: P) => (
  <View style={[{
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    ...buttons.types[type] || buttons.types['Primary'],
    ...buttons.sizes[size] || buttons.sizes['Medium']
  }, style]}>
    <View style={{
        marginTop: (size === 'Micro') ? -5 : -8,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        
      <Text style={{
        ...fonts['SC'],
        color: invert ? 'white' : buttons.types[type].color,
        fontSize: (type === 'Link') ? 14 : buttons.sizes[size].fontSize,
        letterSpacing: buttons.types[type].letterSpacing,
        borderWidth: 0,
        marginBottom: 0,
        fontWeight: buttons.types[type].fontWeight || 500,
      }}>{type === 'Link' ?  name : name.toUpperCase() }</Text>
    </View>
  </View>
);

export default Button;
