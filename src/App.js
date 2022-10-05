import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import ChatList from "./components/ChatList";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Messages from "./components/Messages";
import {useSelector} from "react-redux";

function App() {
    const chatList = useSelector(state => state.chatReducer.chatList)
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={"/"} element={<Layout chatList={chatList}/>}>
                        <Route index path={"/"} element={<Home/>}/>
                        <Route path={"/profile"} element={<Profile/>}/>
                        <Route path={"/chats"} element={<ChatList/>}/>
                        <Route path={"/chats/:id"} element={<Messages/>}/>
                    </Route>
                    <Route index path={"*"} element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
