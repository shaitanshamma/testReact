import React from 'react';
import {Button, IconButton, List, ListItem, ListItemText, TextField} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import {useState} from "react";
import CustomLink from "./CustomLink";
import {useDispatch, useSelector} from "react-redux";

const ChatList = () => {

    const [chatName, setChatName] = useState('');
    const chatList = useSelector((state) => state.chatReducer.chatList)
    const dispatch = useDispatch();

    const chatNameHandler = (e) => {
        setChatName(e.target.value)
    }

    function deleteChat(id) {
        dispatch({type: 'delete', payload: id})
    }

    const chatHandler = (event) => {
        event.preventDefault()
        let chat_id = chatList[chatList.length - 1].id + 1;
        let chat = {id: chat_id, name: chatName}
        dispatch({type: 'addChat', payload: chat})
        setChatName('');
    }

    return (
        <>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {chatList.map((item) => {
                        return (
                            <>
                                <CustomLink to={`${item.id}`} key={item.id}>
                                    <ListItem
                                        disableGutters
                                        secondaryAction={<IconButton
                                            aria-label="comment"><CommentIcon/></IconButton>}><ListItemText
                                        primary={`${item.name}`}/>
                                    </ListItem>
                                </CustomLink>
                                <Button variant="contained" style={{backgroundColor: 'red'}}
                                        onClick={() => deleteChat(item.id)}>Delete</Button>
                            </>)
                    }
                )}
            </List>
            <form onSubmit={chatHandler}>
                <TextField
                    id="outlined-name"
                    label="Chat name"
                    value={chatName}
                    autoFocus
                    onChange={chatNameHandler}
                />
                <Button variant="contained" endIcon={<SendIcon/>} type={'submit'}
                        sx={{ml: '20px'}}>
                    Вжух!
                </Button>
            </form>
        </>
    );
};

export default ChatList;