/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import AccessibilityBadge from './AccessibilityBadge';
import designSystem from '../designSystem';
import SectionTitle from './SectionTitle';
import { Text } from 'react-sketchapp';
import type { Color } from '../processColor';
import chroma from 'chroma-js';

const SWATCH_WIDTH = 150;

// take a hex and give us a nice text color to put over it
const textColor = (hex) => {
  const vsWhite = chroma.contrast(hex, 'white');
  if (vsWhite > 3) {
    return '#FFF';
  }
  return chroma(hex).darken(4).hex();
};


type P = {
  name: string,
  color: Color,
};
const Swatch = ({ color, name }: P) => (
  <View name={name} style={{ marginBottom: 48, marginRight: 48 }}>
    <View
      style={{
        width: SWATCH_WIDTH,
        height: SWATCH_WIDTH,
        backgroundColor: color.hex,
        borderRadius: 3,
        marginBottom: 8,
        flexDirection: 'column-reverse'
      }}
    >
      <View
        style={{
          backgroundColor: 'rgba(0,0,0, 0.1)',
          borderBottomLeftRadius: 3,
          borderBottomRightRadius: 3,
          paddingTop: 8,
          paddingLeft: 16,
          paddingBottom: 16
        }}
      >
        <Text style={{
          ...designSystem.fonts['SC'],
          letterSpacing: 0,
          color: textColor(color.hex)
        }}>{name}</Text>
        <Text style={{
          ...designSystem.fonts['SC'],
          fontWeight: 'normal',
          letterSpacing: 0,
          color: textColor(color.hex)
        }}>{color.hex}</Text>

      </View>


    </View>
    <AccessibilityBadge level={color.accessibility} />

  </View>
);

export default Swatch;
