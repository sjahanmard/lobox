import { useTheme as useThemeJss } from "react-jss";
import { AppTheme } from "../types/types";

export function useTheme() {
  return useThemeJss<AppTheme>();
}
