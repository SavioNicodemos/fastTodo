import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

export const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countItemsContainer: {
    flexDirection: "row",
  },
  countItemsCounter: {
    marginLeft: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: Colors.gray400,
  },
  baseText: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.gray100,
  },
  noTaskContainer: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  noTasksImage: {
    height: 50,
    width: 50,
  },
  noTaskFirstText: {
    paddingTop: 20,
    color: Colors.gray300,
  },
  noTaskSecondText: {
    fontWeight: "normal",
    color: Colors.gray300,
  },
  taskContainer: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    backgroundColor: Colors.gray500,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.gray400
  },
  taskTextBase: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: Colors.gray100
  }
});
