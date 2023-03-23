import { useTheme } from "./use_theme";

export function useStylesTheme(useStyles: Function) {
  const theme = useTheme();
  return useStyles({ theme });
}
