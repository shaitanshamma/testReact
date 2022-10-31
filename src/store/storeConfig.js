import {chatListReducer} from "./reducers/chatReducer";
import {messageListReducer} from "./reducers/messageReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";



const robot = store => next => action => {
    const bot = document.querySelector("h4")
    if (action.type === 'addMessage') {
        setTimeout(() => bot.textContent=action.payload.text, 2000);
    }
    return next(action)
}

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    messageReducer: messageListReducer,
    chatReducer: chatListReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(robot))

export const persistor = persistStore(store);