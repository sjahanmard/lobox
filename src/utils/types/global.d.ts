import { theme } from "../theme/theme_provider";
import { AppTheme } from "./types";

declare global {
  namespace Jss {
    export interface Theme extends AppTheme {}
    export interface DefaultTheme extends AppTheme {}
  }
}
