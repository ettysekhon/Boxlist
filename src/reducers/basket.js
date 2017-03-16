import objectAssign from 'object-assign';
import ActionTypes from '../actions/types';

// TODO: persist items in basket if user leaves app and comes back!

const findProduct = (productId) => {
  return (product) => {
    return product.id === productId;
  };
};

const addProduct = (state, product) => {
  const match = state.basketItems.find(findProduct(product.id));
  if (match) {
    match.qty += 1;
    const ret = state.basketItems.filter((p) => {
      return p.id !== match.id;
    });
    return ret.concat([match]);
  }
  const prod = objectAssign({}, product, {
    qty: 1
  });
  return state.basketItems.concat([prod]);
};

const removeProduct = (state, product) => {
  return state.basketItems.filter((p) => {
    return p.id !== product.id;
  });
};

const getItems = (basketItems) => {
  return basketItems.map((basketItem) => {
    return objectAssign({}, basketItem, {
      total: Number(basketItem.price * basketItem.qty).toFixed(2)
    });
  });
};

const getTotal = (basketItems) => {
  const total = basketItems.map((bi) => {
    return Number(bi.total);
  }).reduce((p, c) => {
    return p + c;
  }, 0);
  return Number(total).toFixed(2);
};

const getDeliveryOptions = (deliveryOptions, selectedDeliveryOption) => {
  return deliveryOptions.map((d) => {
    return objectAssign({},
      d, {
        selected: d.title === selectedDeliveryOption
      });
  });
};

const emptyBasket = {
  count: 0,
  selectedProduct: {},
  basketItems: [],
  total: '0.00',
  selectedDeliveryOption: 'Order online & collect in store',
  deliveryOptions: [{
    title: 'Order online & collect in store',
    selected: false
  }, {
    title: 'Free & Fast Delivery',
    selected: true
  }]
};

const basket = (state = emptyBasket, action) => {
  let basketItems;
  switch (action.type) {
  case ActionTypes.CLEAR_BASKET:
    return objectAssign({}, emptyBasket);
  case ActionTypes.ADD_PRODUCT:
    basketItems = getItems(addProduct(state, action.payload.product));
    return objectAssign({}, state, {
      basketItems,
      count: state.count + 1,
      total: getTotal(basketItems)
    });
  case ActionTypes.SELECT_DELIVERY_OPTION:
    return objectAssign({}, state, {
      selectedDeliveryOption: action.payload.deliveryOption,
      deliveryOptions: getDeliveryOptions(
        state.deliveryOptions,
        action.payload.deliveryOption)
    });
  case ActionTypes.REMOVE_PRODUCT:
    basketItems = getItems(removeProduct(state, action.payload.product));
    return objectAssign({}, state, {
      basketItems,
      count: state.count - action.payload.product.qty,
      total: getTotal(basketItems)
    });
  case ActionTypes.SELECT_PRODUCT:
    return objectAssign({}, state, {
      selectedProduct: action.payload.product
    });
  default:
    return state;
  }
};

export default basket;
