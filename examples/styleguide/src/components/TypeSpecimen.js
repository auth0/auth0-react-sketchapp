/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import SectionTitle from './SectionTitle';

type P = {
  name: string,
  style: any,
};
const TypeSpecimen = ({ name, style }: P) => (
  <View name={`TypeSpecimen-${name}`} style={{ flexDirection: 'row', alignItems: 'flex-end', marginBottom: 24 }}>
    <Text
      style={{
        ...style
      }}
    >
      {(name === 'SC') ? name.toUpperCase() : name }
    </Text>
    <View style={{ marginLeft: 20 }}>
      <SectionTitle>
        {`${style.fontSize} / ${style.lineHeight}`}
      </SectionTitle>
    </View>

  </View>
);

export default TypeSpecimen;
