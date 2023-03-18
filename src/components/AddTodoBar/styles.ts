import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    marginTop: -26
  },
  input: {
    flex: 1,
    width: 300,
    borderRadius: 10,
    marginRight: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: Colors.gray400,
    color: Colors.gray100,
    borderWidth: 1,
    borderColor: Colors.gray300
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: Colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
