/* @flow */
import React, { Element } from 'react';
import chromajs from 'chroma-js';
import _ from 'lodash';
import { colors, spacing } from '../designSystem';
import { View, Text, StyleSheet } from 'react-sketchapp';

const styles = {
  alert: {
    borderRadius: 3,
    display: 'block',
    padding: spacing,
    marginBottom: spacing
  },
  default: {
    backgroundColor: '#f0f0f0'
  },
  success: {
    backgroundColor: chromajs(colors['Status Success']).luminance(0.75),
    color: chromajs(colors['Status Success']).darken(2)
  },
  info: {
    backgroundColor: chromajs(colors['Light Blue']).luminance(0.75),
    color: chromajs(colors['Light Blue']).darken(2)
  },
  warning: {
    backgroundColor: chromajs(colors['BG Alert']).luminance(0.75),
    color: chromajs(colors['BG Alert']).darken(3)
  },
  danger: {
    backgroundColor: chromajs(colors['BG Error']).luminance(0.75),
    color: chromajs(colors['BG Error']).darken(2)
  },
};

const Alert = ({ children, type }: {
  children: Element<*>,
  type: 'default' | 'success' | 'info' | 'warning' | 'danger'
}) =>
  <View style={{...styles.alert, ...styles[type]}}>
    <Text style={{ color: styles[type].color }}>{children}</Text>
  </View>;

Alert.defaultProps = {
  type: 'default'
};

export default Alert;