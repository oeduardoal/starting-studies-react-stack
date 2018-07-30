import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Post.style';

const Post = data => (
  <View style={styles.container}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>
        {data.titulo}
      </Text>
      <Text style={styles.autor}>
        {data.autor}
      </Text>
    </View>
    <Text style={styles.descricao}>
      {data.descricao}
    </Text>
  </View>
);

Post.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Post;
