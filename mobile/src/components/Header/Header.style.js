import { StyleSheet, Platform } from 'react-native';

const white = '#FFF';
const black = '#000';

const styles = StyleSheet.create({
  header: {
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },

  headerTitle: {
    color: black,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
