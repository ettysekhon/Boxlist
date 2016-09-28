import {
  StyleSheet,
} from 'react-native';

import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  list: {
    flex: -1,
    padding: 10
  },
  totalSection: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  totalText: {
    paddingRight: 20,
    fontSize: 16
  },
  totalPrice: {
    alignSelf: 'flex-end',
    fontSize: 16
  },
  totalExcludingVAT: {
    paddingTop: 2,
    fontSize: 9,
    color: 'rgb(155,155,155)'
  },
  deliveryOptions: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgb(223,223,223)'
  },
  header: {
    fontSize: 16
  },
  rightItem: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 15
  },
  emptyBasketText: {
    marginTop: 10,
    fontSize: 20,
    color: '#CCC'
  },
  rowContainer: {
    flex: -1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderColor: 'rgb(223,223,223)'
  },
  supplierLink: {
    color: colors.primary,
    fontSize: 14
  },
  supplier: {
    color: 'rgb(155,155,155)',
    fontSize: 10,
    paddingTop: 5,
    paddingLeft: 15
  },
  productTitle: {
    color: 'rgb(74,74,74)'
  },
  productPrice: {
    color: 'rgb(0,0,0)',
    fontSize: 14
  },
  productRemoveLink: {
    paddingTop: 10,
    color: 'rgb(155,155,155)',
    fontSize: 14
  },
  productQuantitySection: {
    marginTop: 10,
    flexDirection: 'row',
  },
  productQuantityLabel: {
    color: 'rgb(155,155,155)',
    marginRight: 15
  },
  rowMiddleSection: {
    paddingLeft: 5,
    flex: 1,
  },
  productImage: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    marginRight: 10
  }
});
