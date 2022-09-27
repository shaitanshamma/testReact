import './App.css';
import {useState} from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import ChatList from "./components/ChatList";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Messages from "./components/Messages";


function App() {

    const [chatList] = useState([
        {
            id: 1,
            name: 'first_chat'
        },
        {
            id: 2,
            name: 'second_chat'
        },
        {
            id: 3,
            name: 'third_chat'
        },
    ]);

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
