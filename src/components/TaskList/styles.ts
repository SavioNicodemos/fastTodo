import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  countItemsContainer: {
    flexDirection: 'row'
  },
  countItemsCounter: {
    marginLeft: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#333333"
  },
  baseText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff'
  },
  noTaskContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noTasksImage: {
    height: 50,
    width: 50,
  },
  noTaskFirstText: {
    paddingTop: 20,
    color: '#808080'
  },
  noTaskSecondText: {
    fontWeight: 'normal',
    color: '#808080'
  },
});
