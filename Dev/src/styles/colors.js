import { useContext } from "react";
import {ThemeContext} from '../contexts/ThemeContext'
import { darkThemeColors } from "./dark_theme";
import { LightThemeColors } from "./light_theme";

export const Colors = () => {
    const themeState = useContext(ThemeContext);
    const {theme} = themeState;
    const colors = !theme?darkThemeColors:LightThemeColors;
    return colors;
}