/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import Label from './Label';

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
      <Label>
        {`${style.fontSize} / ${style.lineHeight}`}
      </Label>
    </View>

  </View>
);

export default TypeSpecimen;
