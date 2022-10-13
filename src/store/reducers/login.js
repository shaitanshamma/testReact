import * as actionTypes from "./actionTypes";
import {loginError, loginOk, loginLoading, logoutLoading, logoutOk, logoutError} from "./actions";
import {auth} from "../../services/firebase";

const initialState = {
    loading: false,
    error: null,
    registerUser: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_LOADING:
        case actionTypes.LOGOUT_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOGIN_OK:
            return {
                ...state,
                registerUser: action.payload
            }
        case actionTypes.LOGOUT_OK:
            return {
                ...state,
                registerUser: null
            }
        case actionTypes.LOGIN_ERROR:
        case actionTypes.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export const loginStart = (email, password) => {
    return (dispatch) => {
        dispatch(loginLoading());
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) =>{
                    dispatch(loginOk(user))
                })
            .catch(e=>{
                dispatch(loginError(e))
            })
    }
}
export const logoutStart = () => {
    return (dispatch) => {
        dispatch(logoutLoading());
        auth
            .signOut()
            .then(() =>{
                dispatch(logoutOk())
            })
            .catch(e=>{
                dispatch(logoutError(e))
            })
    }
}