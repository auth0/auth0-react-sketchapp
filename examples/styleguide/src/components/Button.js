/* @flow */
import React from 'react';
import _ from 'lodash';
import { View, StyleSheet, Image } from 'react-sketchapp';
import { fonts, spacing, colors } from '../designSystem';
import { Text } from 'react-sketchapp';
import type { Color } from '../processColor';

//To-do
//With image/icon

const styles = StyleSheet.create({
  image: {
    height: 14,
    width: 14,
    top: 2,
    marginRight: spacing
  }
});

export const buttons = {
  sizes: {
    large: {
      height: spacing * 4
    },
    medium: {
      height: spacing * 3
    },
    small: {
      height: spacing * 2.5
    },
    micro: {
      height: spacing * 2,
      textStyles: {
        fontSize: 11
      }
    }
  },
  types: {
    success: {
      backgroundColor: colors.Red,
      textStyles: {
        color: 'white'
      }
    },
    primary: {
      backgroundColor: colors['Light Blue'],
      textStyles: {
        color: 'white'
      }
    },
    disabled: {
      backgroundColor: '#CCCCCC',
      textStyles: {
        color: 'rgba(0,0,0,.26)'
      }
    },
    transparent: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#444'
    },
    link: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      textStyles: {
        letterSpacing: 0,
        fontWeight: 'normal'
      }
    }
  }
}

const getTextStyles = (type: string, size: string) =>
  Object.assign({},
    _.get(buttons, `types.${type}.textStyles`),
    _.get(buttons, `sizes.${size}.textStyles`)
  );

const Button = ({ name, type, size, style }: {
  name: string,
  type: 'success' | 'primary' | 'disabled' | 'transparent' | 'link',
  size: 'large' | 'medium' | 'small' | 'micro'
}) =>
  <View style={[{
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: spacing,
    paddingRight: spacing,
    letterSpacing: 1,
    ...buttons.types[type],
    ...buttons.sizes[size]
  }, style]}>
    <View style={{
        marginTop: (size === 'micro') ? -5 : -8,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        
      <Text style={{
        ...fonts['SC'],
        borderWidth: 0,
        ...getTextStyles(type, size)
      }}>
        {type === 'link' ? name : name.toUpperCase() }
      </Text>
    </View>
  </View>;

Button.defaultProps = {
  type: 'success',
  size: 'medium'
};

export default Button;
