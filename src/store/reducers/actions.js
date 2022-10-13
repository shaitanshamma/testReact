import * as actionTypes from "./actionTypes";

export const registerLoading = () => ({
    type: actionTypes.REGISTER_LOADING
})

export const registerError = (error) => ({
    type: actionTypes.REGISTER_ERROR,
    payload: error.toString()
})

export const registerOk = (user) => ({
    type: actionTypes.REGISTER_OK,
    payload: user
})

export const loginLoading = () => ({
    type: actionTypes.LOGIN_LOADING
})

export const loginError = (error) => ({
    type: actionTypes.LOGIN_ERROR,
    payload: error.toString()
})

export const loginOk = (user) => ({
    type: actionTypes.LOGIN_OK,
    payload: user
})

export const logoutLoading = () => ({
    type: actionTypes.LOGOUT_LOADING
})

export const logoutError = (error) => ({
    type: actionTypes.LOGOUT_ERROR,
    payload: error.toString()
})

export const logoutOk = () => ({
    type: actionTypes.LOGOUT_OK,
})