import { ThemeContext } from "../pages/ThemeContext";
import { useContext } from "react";

export default function ThemeButton() {
  const { state, dispatch } = useContext(ThemeContext);

  const buttondark = {
    background: "black",
    color: "white",
  };

  const buttonlight = {
    background: "white",
    color: "black",
  };

  function changeTheme() {
    if (state.isDarkMode) {
      dispatch("SET_LIGHT_MODE");
    } else {
      dispatch("SET_DARK_MODE");
    }
  }

  return (
    <button
      style={state.isDarkMode ? buttondark : buttonlight}
      onClick={changeTheme}
    >
      Change Theme
    </button>
  );
}