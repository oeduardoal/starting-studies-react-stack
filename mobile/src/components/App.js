import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './App.style';

import Header from './Header/Header';
import Post from './Post/Post';

export default class App extends Component {
  state = {
    title: 'GoNative',
    posts: [
      {
        id: 1,
        titulo: 'Aprendendo React Native',
        autor: 'Eduardo Almeida',
        descricao: 'lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor '
      },
      {
        id: 2,
        titulo: 'Aprendendo React Native',
        autor: 'Eduardo Almeida',
        descricao: 'lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor '
      },
      {
        id: 3,
        titulo: 'Aprendendo React Native',
        autor: 'Eduardo Almeida',
        descricao: 'lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor ',
      },
      {
        id: 4,
        titulo: 'Aprendendo React Native',
        autor: 'Eduardo Almeida',
        descricao: 'lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor ',
      },
      {
        id: 5,
        titulo: 'Aprendendo React Native',
        autor: 'Eduardo Almeida',
        descricao: 'lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor lorem impsum dolor ',
      },
    ],
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={this.state.title} />
        <ScrollView>
          {
            this.state.posts.map(post => <Post key={post.id} titulo={post.titulo} autor={post.autor} descricao={post.descricao} />)
          }
        </ScrollView>
      </View>
    );
  }
}
