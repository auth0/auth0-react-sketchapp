/* @flow */
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-sketchapp';
import { fonts, colors, spacing } from '../designSystem';
import Button, { buttons } from './Button';


// To-do
// - Avatar logged in
// - Align to right with buttons
// - 

// These item names will get a chevron appended if used on the header
const dropdownItems = ['Platform', 'Solutions', 'Why Auth0', 'Developers'];

const styles = StyleSheet.create({
  header: {
    width: 1400,
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
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
    ...fonts['SC'],
    color: colors['BG Oil'],
    fontWeight: 600,
    marginLeft: spacing,
    marginTop: -2
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  navItem: {
    padding: spacing,
    flexDirection: 'row'
  },
  appendedButton: {
    marginLeft: spacing
  },
  chevron: {
    height: 4.92,
    width: 8.44,
    marginLeft: -10,
    marginRight: 10,
    opacity: 0.5
  },
  dropDownItem: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});

const Header = ({ subtitle, items, appendButtons, mode, bgColor, login }: P) => (
  <View name='header' style={[ styles.header, { backgroundColor: bgColor || colors['BG Light'] } ]}>
    <View name='container' style={styles.container}>
      <View name='brand' style={styles.brand}>
        
        <Image name='logo' style={styles.logo}
          source={(mode === 'dark') ? 
            'https://cdn.auth0.com/styleguide/latest/img/logo-grey.png' : 
            'https://cdn.auth0.com/styleguide/latest/img/logo-blue.png'
          }
          resizeMode='contain'
        />
      
      {subtitle ? 
        <Text style={styles.subtitle}>{subtitle.toUpperCase()}</Text>
        : null
      }
        
      </View>
      <View name='nav' style={styles.nav}>
        {items.map(item => (
          <View style={styles.dropDownItem}>
            <Text key={item} name='nav-item' style={[styles.navItem, {color: (mode === 'dark') ? 'white' : 'black'}]}>{item}</Text>
            
            {(dropdownItems.includes(item)) ?
              <Image name='chevron' style={styles.chevron}
                source={(mode === 'dark') ? 
                  'https://cdn.auth0.com/website/sg-assets/chevron-white.png' : 
                  'https://cdn.auth0.com/website/sg-assets/chevron.png'
                }
                resizeMode='contain'
              />
              :
              null
            }
          </View>
        ))}
        

        {Object.keys(appendButtons || {}).map(button => (
          <Button style={styles.appendedButton} type={appendButtons[button].type || 'Link'} size="Micro" name={button || 'Talk to Sales'} invert={(mode === 'dark') ? true : false} />
        ))}
      </View>

      
      {login ? 
        <View name='nav' style={styles.nav}>
          <Text name='nav-item' style={[styles.navItem, {color: (mode === 'dark') ? 'white' : 'black'}]}>Log In</Text>
          <Button type="Success" size="Micro" name="Sign Up" />
        </View>
      : null}
      
    </View>
  </View>
);

Header.defaultProps = {
  items: ['Platform', 'Solutions', 'Why Auth0', 'Developers', 'Pricing'],
  appendButtons: {
    'Talk to Sales': {
      type: 'Link'
    }
  },
  login: true
};

export default Header;
