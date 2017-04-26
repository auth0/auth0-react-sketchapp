/* @flow */
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-primitives';
import { fonts, colors, buttons, spacing } from '../designSystem';
import Button from './Button';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors['BG Light'],
    width: 1400,
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: 1100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    height: 110,
    width: 89,
  },
  subtitle: {
    ...fonts['Small Caps'],
    color: colors['BG Oil'],
    fontWeight: 600,
    marginLeft: spacing
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nav_item: {
    padding: spacing
  }
});

const Header = ({ subtitle }: P) => (
  <View name='header' style={styles.header}>
    <View name='container' style={styles.container}>
      <View name='brand' style={styles.brand}>
        <Image name='logo' style={styles.logo}
          source='https://cdn.auth0.com/styleguide/latest/img/logo-blue.png'
          resizeMode='contain'
        />
        <Text style={styles.subtitle}>{subtitle.toUpperCase()}</Text>
      </View>
      <View name='nav' style={styles.nav}>
        <Text name='nav-item' style={styles.nav_item}>Documentation</Text>
        <Text name='nav-item' style={styles.nav_item}>Talk to Sales</Text>
        <Button type="Success" size="Micro" name="Login to Account Center" />
      </View>
    </View>
  </View>
);

export default Header;
