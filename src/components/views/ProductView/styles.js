import {
  StyleSheet,
} from 'react-native';

import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
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
