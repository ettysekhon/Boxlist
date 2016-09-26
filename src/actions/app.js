import loadProducts from './products';

export default () => {
  return (dispatch) => {
    dispatch(loadProducts());
  };
};
