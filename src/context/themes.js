import {createContext} from "react";

export const themes = {
    light:{
        background:'gray',
        color:'black'
    },
    dark:{
        background: 'black',
        color: 'white'
    }
}

export const ThemeContext = createContext(themes.light)