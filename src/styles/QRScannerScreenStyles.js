import { StyleSheet } from "react-native";
import theme from "./Theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  text: {
    fontSize: theme.fonts.size.medium,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.medium,
  },
});
