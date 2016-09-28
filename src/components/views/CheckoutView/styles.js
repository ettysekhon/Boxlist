import {
  StyleSheet,
} from 'react-native';

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
  error: {
    paddingTop: 15,
    color: 'red'
  },
  totalSection: {
    padding: 10,
    flexDirection: 'column',
    backgroundColor: 'rgb(250,250,250)'
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalText: {
    color: 'rgb(155,155,155)',
    fontSize: 14
  },
  totalValue: {
    color: 'rgb(0,0,0)',
    fontSize: 14
  },
  totalPrice: {
    alignSelf: 'flex-end',
    fontSize: 16
  },
  totalIncludingVAT: {
    paddingTop: 2,
    fontSize: 9,
    color: 'rgb(155,155,155)'
  },
  deliveryInstructions: {
    paddingTop: 10,
    paddingBottom: 10
  },
  listHeader: {
    fontSize: 16
  },
  header: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10
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
  supplier: {
    color: 'rgb(204,204,204)',
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 35
  },
  textArea: {
    height: 66,
    padding: 10,
    fontSize: 14,
    color: 'rgb(155,155,155)',
    borderWidth: 1,
    borderColor: 'rgb(204,204,204)',
    marginBottom: 5
  },
  textInput: {
    height: 44,
    padding: 10,
    fontSize: 14,
    color: 'rgb(155,155,155)',
    borderWidth: 1,
    borderColor: 'rgb(204,204,204)',
    marginBottom: 5
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
    flexDirection: 'row'
  },
  productQuantityLabel: {
    color: 'rgb(155,155,155)',
    marginRight: 15
  },
  rowMiddleSection: {
    paddingLeft: 5,
    flex: 1
  },
  productImage: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    marginRight: 10
  }
});
