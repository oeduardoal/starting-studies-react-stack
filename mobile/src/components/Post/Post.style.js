import { StyleSheet, Platform } from 'react-native';

const white = '#FFF';
const black = '#333333';
const textAutor = '#999999';
const textDescricao = '#666666';
const border = '#EEEEEE';

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: black,
  },
  autor: {
    color: textAutor,
  },
  descricao: {
    marginTop: 20,
    borderTopWidth: 0.5,
    borderColor: '#d6d7da',
    color: textDescricao,
  },
});

export default styles;
