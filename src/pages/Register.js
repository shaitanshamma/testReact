import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {registerStart} from "../store/reducers/register";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [nickName, setNickName] = useState('');
    const navigate = useNavigate('');

    const dispatch = useDispatch();


    function handleRegister(event) {
        event.preventDefault();
        if (password === passwordConfirm) {
            dispatch(registerStart(email, password, nickName));
            setTimeout(() => {
                navigate('/home')
            }, 1000)
        } else return
    }

    return (
        <div>
            <h3>Register</h3>
            <form onClick={handleRegister}>
                <input type="text" value={nickName} placeholder={"Nick name"}
                       onChange={(event => setNickName(event.target.value))}/>
                <input type="email" value={email} placeholder={"Email"}
                       onChange={(event => setEmail(event.target.value))}/>
                <input type="password" value={password} placeholder={"Password"}
                       onChange={(event => setPassword(event.target.value))}/>
                <input type="password" value={passwordConfirm} placeholder={"Confirm password"}
                       onChange={(event => setPasswordConfirm(event.target.value))}/>
                <button type={"submit"}>Register</button>
            </form>
        </div>
    );
};

export default Register;