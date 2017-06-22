import React, { Element } from 'react';
import chromajs from 'chroma-js';
import { colors, spacing } from '../designSystem';
import { View, Text, StyleSheet } from 'react-sketchapp';

const styles = {
  label: {
    borderRadius: 3,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 3,
    paddingHorizontal: 12,
    marginBottom: spacing,
    alignItems: 'center',
    justifyContent: 'center'
  },
  default: {
    color: '#777',
    borderColor: '#777'
  },
  primary: {
    color: colors['Light Blue'],
    borderColor: colors['Light Blue']
  },
  success: {
    color: colors.Red,
    borderColor: colors.Red,
  },
  info: {
    color: "#5bc0de",
    borderColor: "#5bc0de"
  },
  warning: {
    color: "#f0ad4e",
    borderColor: "#f0ad4e"
  },
  danger: {
    color: "#d9534f",
    borderColor: "#d9534f"
  }
};

const Label = ({ children, type } : {
  children: Element<*>,
  type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
}) =>
  <View style={{ ...styles.label, ...styles[type] }}>
    <Text style={{
      color: styles[type].color,
      letterSpacing: 1,
      fontSize: 10.5
    }}>
      {children}
    </Text>
  </View>;

Label.defaultProps = {
  type: 'default'
};

export default Label;
