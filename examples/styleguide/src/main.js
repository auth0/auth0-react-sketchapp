/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { Artboard, render, TextStyles } from 'react-sketchapp';
import { View } from 'react-primitives'
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';

import Label from './components/Label';
import Header from './components/Header';
import Palette from './components/Palette';
import Button from './components/Button';
import ButtonSample from './components/ButtonSample';
import Section from './components/Section';
import TypeSpecimen from './components/TypeSpecimen';

const Document = ({ system }: { system: DesignSystem }) => (
  <Artboard name="Fernando" style={{padding: 20}}>
    <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 8, fontFamily: 'Fakt Pro' }}>
      <Label>
        Hola Juli This is an example react-sketchapp document, showing how to
        render a styleguide from a data representation of your design system.
      </Label>
    </View>

    <Section title="Type Styles">
      {Object.keys(system.fonts).map(name => (
        <TypeSpecimen key={name} name={name} style={TextStyles.get(name)} />
      ))}
    </Section>

    <Section title="Color Palette">
      <Palette colors={system.colors} />
    </Section>

    <Section title="Buttons">

      <View style={{
        width: 600,
        flexWrap: 'wrap',
        flexDirection: 'row'
      }}>
      {Object.keys(system.buttons.types).map(type => (
        <ButtonSample key={type} type={type} style={system.buttons.types[type]} />
      ))}
      </View>
    </Section>

    <Section title="Header">
      <Header subtitle="Account Center" />
    </Section>
  </Artboard>
);

export default (context: any) => {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    designSystem.fonts,
  );

  render(<Document system={designSystem} />, context.document.currentPage());
}
