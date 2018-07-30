import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Header.style';

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>
      {title}
    </Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
