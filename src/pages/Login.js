import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginStart} from "../store/reducers/login";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const dispatch = useDispatch();

    function handleLogin(e) {
        e.preventDefault();
        if(!email||!password){
            return;
        }else {
            dispatch(loginStart(email, password));
            setTimeout(()=>{
                navigate('/',1000)
            })
        }
    }

    return (
        <div>
            <h3>Login</h3>
            <form onClick={handleLogin}>
                <input type="email" value={email} placeholder={"Email"}
                       onChange={(event => setEmail(event.target.value))}/>
                <input type="password" value={password} placeholder={"Password"}
                       onChange={(event => setPassword(event.target.value))}/>
                <button type={"submit"}>Login</button>
            </form>
        </div>
    );
};

export default Login;