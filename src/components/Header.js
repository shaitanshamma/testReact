import React, {useContext, useState} from 'react';
import CustomLink from "./CustomLink";
import {ThemeContext, themes} from '../context/themes';
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {logoutStart} from "../store/reducers/login";
import {useNavigate} from 'react-router-dom';


const Header = () => {
    const user = useSelector(state => state.loginReducer.registerUser)
    const [theme, setTheme] = useState(themes.light);
    const dispatch = useDispatch();
    const navigate = useNavigate('');

    function toggleTheme() {
        setTheme(prevState => prevState === themes.light ? themes.dark : themes.light)
    }

    function logout() {
        dispatch(logoutStart());
        setTimeout(()=>{
            navigate('/')
        },1000)
    }

    if (user) {
        return (
            <header style={{background: theme.background, color: theme.color, height: '50px'}}>
                <CustomLink to={"/"}> Home </CustomLink>
                <CustomLink to={"/profile"}> Profile </CustomLink>
                <CustomLink to={"/chats"}> Chats </CustomLink>
                <CustomLink to={"/users"}> Users </CustomLink>
                <Button variant="contained" style={{float: "right", marginTop: "7px", backgroundColor:'red'}} onClick={logout}>Logout</Button>
                <Button variant="contained" style={{float: "right", marginTop: "7px"}} onClick={toggleTheme}>Переключить
                    тему</Button>
            </header>
        );
    }else {
        return (
            <header style={{background: theme.background, color: theme.color, height: '50px'}}>
                <CustomLink to={"/"}> Home </CustomLink>
                <CustomLink to={"/register"}> Register </CustomLink>
                <CustomLink to={"/login"}> Login </CustomLink>
                <Button variant="contained" style={{float: "right", marginTop: "7px"}} onClick={toggleTheme}>Переключить
                    тему</Button>
            </header>
        );
    }
};

export default Header;