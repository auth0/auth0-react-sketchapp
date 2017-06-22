/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import SectionTitle from './SectionTitle';

type P = {
  title: string,
  children?: any,
};
const Section = ({ title, description, children }: P) => (
  <View style={{ marginBottom: 96, marginRight: 50, flexDirection: 'row' }}>
    <View style={{ width: 400, paddingRight: 90 }}>
      <SectionTitle bold>{title}</SectionTitle>
      <SectionTitle>{description}</SectionTitle>
    </View>
    <View>
      {children}
    </View>
  </View>
);

export default Section;
