/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import Label from './Label';

type P = {
  title: string,
  children?: any,
};
const Section = ({ title, description, children }: P) => (
  <View style={{ marginBottom: 96, marginRight: 50, flexDirection: 'row' }}>
    <View style={{ width: 400, paddingRight: 90 }}>
      <Label bold>{title}</Label>
      <Label>{description}</Label>
    </View>
    <View>
      {children}
    </View>
  </View>
);

export default Section;
