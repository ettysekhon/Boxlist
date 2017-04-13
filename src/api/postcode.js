

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

const getLngLat = (postCode) => {
  const url = `https://api.postcodes.io/postcodes/${postCode.replace(/ /g, '')}`;
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(status)
    .then(getJson)
    .then((payload) => {
      const ret = payload && payload.result ? payload.result : payload;
      resolve(ret);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

export default {
  getLngLat
};
