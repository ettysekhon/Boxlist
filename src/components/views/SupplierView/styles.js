import {
  StyleSheet,
} from 'react-native';

import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: -1,
    padding: 10
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
  openingHoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
