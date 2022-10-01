import {chatListReducer} from "./reducers/chatReducer";
import {messageListReducer} from "./reducers/messageReducer";
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    messageReducer: messageListReducer,
    chatReducer:chatListReducer
});

export const store = createStore(reducers)