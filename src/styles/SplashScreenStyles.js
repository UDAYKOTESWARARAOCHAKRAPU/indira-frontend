import { StyleSheet } from "react-native";
import theme from "./Theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.fonts.size.xlarge,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  subtitle: {
    fontSize: theme.fonts.size.medium,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.small,
  },
});
