/* @flow */
import React from 'react';
import designSystem from '../designSystem';
import { Text } from 'react-sketchapp';

type P = {
  bold?: boolean,
  children?: any,
};
const SectionTitle = ({ bold, color, children }: P) => (
  <Text
    style={{
      ...designSystem.fonts.Body,
      fontWeight: bold ? '500' : 'normal',
      marginBottom: 0,
      color: color
    }}
  >
    {children}
  </Text>
);

export default SectionTitle;
