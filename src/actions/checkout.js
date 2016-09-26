import {
  Alert
} from 'react-native';
import ActionTypes from './types.js';
import createAction from './createAction';
import API from '../api';
import constants from '../constants';

const placeOrderRequest = createAction(ActionTypes.PLACE_ORDER_REQUEST);
const placeOrderSuccess = createAction(ActionTypes.PLACE_ORDER_SUCCESS);
const placeOrderFailure = createAction(ActionTypes.PLACE_ORDER_FAILURE);

const placeOrder = (order, navigator) => {
  return (dispatch) => {
    dispatch(placeOrderRequest(order));
    API.placeOrder(order)
    .then((payload) => {
      dispatch(placeOrderSuccess({
        confirmation: payload
      }));
      navigator.push({
        route: constants.routes.CONFIRMATION
      });
    }).catch((err) => {
      Alert.alert(
        'Howdy!',
        'Looks like you are hiding in a cave. Please connect to the internet and try again.',
        [
          {
            text: 'OK',
            onPress: () => {
              return console.log('OK Pressed!');
            }
          }
        ]
      );
      dispatch(placeOrderFailure(null, err));
    });
  };
};

export default placeOrder;
