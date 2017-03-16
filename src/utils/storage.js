import { AsyncStorage } from 'react-native';

export const getItem = (key) => {
  return AsyncStorage.getItem(key);
};

export const setItem = (key, value) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};
