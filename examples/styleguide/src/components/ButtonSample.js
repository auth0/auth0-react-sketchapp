/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import { spacing } from '../designSystem';
import Button, { buttons } from './Button'
import type { Color } from '../processColor';

const ButtonSample = ({ type }: {
  type: 'success' | 'primary' | 'disabled' | 'transparent' | 'link'
}) => (
  <View style={{
    marginBottom: spacing * 2,
    marginRight: spacing * 3
  }}>
    {Object.keys(buttons.sizes).map(size => (
      <Button
        key={size}
        name={type + ' ' + size}
        size={size}
        type={type}
        style={{ marginBottom: spacing }}
      />
    ))}

  </View>
);

export default ButtonSample;
