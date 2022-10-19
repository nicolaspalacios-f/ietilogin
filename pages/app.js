import { initialState, themeReducer } from "./utils";
import { ThemeContext } from "./ThemeContext";
import { useReducer } from "react";
import ThemeButton from "../components/themeButton";

export default function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ThemeButton>Change Theme</ThemeButton>
    </ThemeContext.Provider>
  );
}
