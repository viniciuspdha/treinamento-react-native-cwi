import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#3F25E5",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
  button: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "33%",
  },
});
