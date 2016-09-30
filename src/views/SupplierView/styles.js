import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: -1,
    padding: 10
  },
  map: {
    height: 200,
    marginVertical: 10
  },
  header: {
    fontSize: 18,
    paddingTop: 5
  },
  subHeading: {
    paddingVertical: 3
  },
  description: {
    color: 'rgb(204,204,204)'
  },
  rightItem: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 15
  },
  openingHoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
