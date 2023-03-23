import "./App.css";
import { DropDown } from "./components/drop_down";
import { AppThemeProvider } from "./utils/theme_provider";

function App() {
  return (
    <AppThemeProvider>
      <DropDown />
    </AppThemeProvider>
  );
}

export default App;
