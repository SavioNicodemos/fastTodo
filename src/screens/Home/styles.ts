import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

export const styles = StyleSheet.create({
  header: {
    height: 200,
    backgroundColor: Colors.gray700,
    paddingHorizontal: 30,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.gray600,
    paddingHorizontal: 30,
  },
  image: {
    height: 40,
    marginVertical: 80
  },
});
