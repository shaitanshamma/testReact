import * as actionTypes from "./actionTypes";
import {registerError, registerLoading, registerOk} from "./actions";
import {auth} from "../../services/firebase";

const initialState = {
    loading: false,
    error: null,
    registerUser: null
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.REGISTER_OK:
            return {
                ...state,
                registerUser: action.payload
            }
        case actionTypes.REGISTER_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export const registerStart = (email, password, nickName) => {
    return (dispatch) => {
        dispatch(registerLoading());
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                    user.updateProfile({
                        displayName: nickName
                    })
                    dispatch(registerOk(user))
                }
            )
            .catch(e=>{
                dispatch(registerError(e))
            })
    }
}