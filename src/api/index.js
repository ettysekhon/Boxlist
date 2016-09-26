import objectAssign from 'object-assign';

// TODO: remove this hack when fixed in later version of react-native
// http://stackoverflow.com/questions/38077273/react-native-fect-network-request-failed-not-using-localhost

const getEndpoint = (path) => {
  const host = 'http://boxlist.kicks-ass.org/api/';
  return `${host}${path}`;
};

const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const getJson = (response) => {
  return response.text().then((text) => {
    if (text === '' || text === 'OK' || typeof text === 'undefined') {
      return {};
    }
    return JSON.parse(text);
  });
};

const getPayload = (json) => {
  return typeof json.payload === 'undefined'
    ? json
    : json.payload;
};

const get = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(status)
    .then(getJson)
    .then(getPayload)
    .then((payload) => {
      resolve(payload);
    })
    .catch((err) => {
      console.log('API error', err);
      reject(err);
    });
  });
};

const post = (url, body) => {
  // const { auth } = store.getState();
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        // Authorization: auth.token,
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(body)
    })
    .then(status)
    .then(getJson)
    .then(getPayload)
    .then((payload) => {
      resolve(payload);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

const loadProducts = () => {
  return new Promise((resolve, reject) => {
    get(getEndpoint('product'))
      .then((response) => {
        const products = response.products;
        const prods = products.map((product, index) => {
          return objectAssign({}, product, {
            id: index + 1,
            supplier: 'halladeys',
            price: Number(product.price).toFixed(2),
            costPrice: Number(product.costPrice).toFixed(2)
          });
        });
        resolve(prods);
      })
      .catch((err) => {
        console.log('error getting products', err);
        reject(err);
      });
  });
};

const placeOrder = (order) => {
  return post(getEndpoint('order'), order);
};

export default {
  loadProducts,
  placeOrder
};
