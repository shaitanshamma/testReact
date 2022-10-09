import React, {useContext, useState} from 'react';
import CustomLink from "./CustomLink";
import {ThemeContext, themes} from '../context/themes';
import {Button} from "@mui/material";


const Header = () => {

    const [theme, setTheme] = useState(themes.light);

    function toggleTheme() {
        setTheme(prevState => prevState === themes.light ? themes.dark : themes.light)
    }

    return (
        <header style={{background: theme.background, color: theme.color, height: '50px'}}>
            <CustomLink to={"/"}> Home </CustomLink>
            <CustomLink to={"/profile"}> Profile </CustomLink>
            <CustomLink to={"/chats"}> Chats </CustomLink>
            <CustomLink to={"/users"}> Users </CustomLink>
            <Button variant="contained" style={{float: "right", marginTop: "7px"}} onClick={toggleTheme}>Переключить
                тему</Button>
        </header>
    );
};

export default Header;