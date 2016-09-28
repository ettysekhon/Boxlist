import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  rightItem: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 15
  },
  productImage: {
    alignSelf: 'center',
    height: 175,
    width: 125
  },
  productTitle: {
    marginTop: 20,
    fontSize: 22.5,
    color: 'rgb(74,74,74)',
    alignItems: 'flex-start',
  },
  productPrice: {
    marginTop: 10,
    fontSize: 25,
    color: 'red',
    alignItems: 'flex-start'
  },
  productSupplier: {
    marginTop: 10,
    fontSize: 10,
    color: 'rgb(204,204,204)',
    alignSelf: 'center',
  },
});
