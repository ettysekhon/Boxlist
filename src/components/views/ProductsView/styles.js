import {
  StyleSheet,
} from 'react-native';

import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  leftItem: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 15
  },
  rightItem: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 15
  },
  leftText: {
    fontSize: fonts.size.s,
    color: colors.primary,
    marginLeft: 5
  },
  contentContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 120
  },
  row: {
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    width: 335 / 3,
    height: 175,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEE'
  },
  productImage: {
    alignSelf: 'center',
    height: 60,
    width: 60
  },
  productTitle: {
    marginTop: 10,
    fontSize: 10,
    color: 'rgb(74,74,74)',
    flex: 1,
    alignItems: 'flex-start',
  },
  productPrice: {
    flex: 1,
    alignItems: 'flex-start',
    bottom: 10,
    left: 10,
    right: 0,
    position: 'absolute',
    fontSize: 16,
    color: 'red'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  emptyBasketText: {
    marginTop: 10,
    fontSize: 20,
    color: '#CCC'
  },
});
