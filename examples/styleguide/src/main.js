/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { Artboard, render, TextStyles, View } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';

import SectionTitle from './components/SectionTitle';
import Header from './components/Header';
import Palette from './components/Palette';
import { buttons } from './components/Button';
import ButtonSample from './components/ButtonSample';
import Section from './components/Section';
import TypeSpecimen from './components/TypeSpecimen';
import Alert from './components/Alert';
import Label from './components/Label';

//To-do
//Tables
//Footer
//Dropdown with avatar
//Spinner
//Alerts
//UI switch
//Breadcrumbs
//Forms

const Document = ({ system }: { system: DesignSystem }) => (
  <Artboard name="Basics" style={{padding: 100}}>
    <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 8, fontFamily: 'Fakt Pro' }}>
      <SectionTitle>
        Hola Juli This is an example react-sketchapp document, showing how to
        render a styleguide from a data representation of your design system.
      </SectionTitle>
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
      {Object.keys(buttons.types).map(type => (
        <ButtonSample key={type} type={type}/>
      ))}
      </View>
    </Section>

    <Section title="Header" description="Possible types of configurations for the Auth0 Header">
      <Header />
      
      <Header mode="dark" bgColor={system.colors['BG Dark'].hex} />
      
      <Header subtitle="docs" bgColor='rgba(0,0,0,0.1)' />
      
      <Header 
        subtitle="Status"
        items={['Link 1', 'Link 2']} 
        appendButtons={{
          'Sign Up': {
            type: 'Success'
          }
        }}
        login={false}
      />
    </Section>

    <Section title="Alerts">
      {['default', 'success', 'info', 'warning', 'danger'].map(type =>
        <Alert type={type} key={type}>
          Well done! This alert will show you some extra information.
        </Alert>
      )}
    </Section>

    <Section title="Labels">
      {['default', 'primary', 'success', 'info', 'warning', 'danger'].map(type =>
        <Label type={type} key={type}>
          {_.toUpper(type)}
        </Label>
      )}
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
