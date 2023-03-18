import { StyleSheet } from "react-native";

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
    backgroundColor: "#333333",
  },
  baseText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
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
    color: "#808080",
  },
  noTaskSecondText: {
    fontWeight: "normal",
    color: "#808080",
  },
  taskContainer: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    backgroundColor: "#262626",
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333'
  },
  taskTextBase: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#f2f2f2'
  }
});
