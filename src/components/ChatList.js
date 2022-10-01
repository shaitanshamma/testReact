import React from 'react';
import {Button, IconButton, List, ListItem, ListItemText, TextField} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import {useEffect, useState} from "react";
import CustomLink from "./CustomLink";

const ChatList = () => {

    const [messageList, setMessageList] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [robot, setRobot] = useState('');
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

    const nameHandler = (e) => {
        setAuthor(e.target.value)
    }
    const textHandler = (e) => {
        setText(e.target.value)
    }
    const messageHandler = (event) => {
        event.preventDefault()
        setMessageList(messageList => [...messageList, {
            author: author,
            text: text
        }])
        setAuthor('');
        setText('');
    }
    useEffect(() => {
        setTimeout(() => {
            if (messageList.length) {
                setRobot(messageList[messageList.length - 1].author + ' send some text')
            }
        }, 2000)
    }, [messageList])
    return (
        <>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {chatList.map((item) => {
                        return <CustomLink to={`${item.id}`} key={item.id}>
                            <ListItem
                                disableGutters
                                secondaryAction={<IconButton
                                    aria-label="comment"><CommentIcon/></IconButton>}><ListItemText
                                primary={`${item.name}`}/>
                            </ListItem>
                        </CustomLink>
                    }
                )}
            </List>
            <form onSubmit={messageHandler}>
                <TextField
                    id="outlined-name"
                    label="Author"
                    value={author}
                    autoFocus
                    onChange={nameHandler}
                />
                <TextField
                    id="outlined-name"
                    label="Text"
                    value={text}
                    onChange={textHandler}
                />
                <Button variant="contained" endIcon={<SendIcon/>} type={'submit'}
                        sx={{ml: '20px'}}>
                    Вжух!
                </Button>
            </form>
            <List>{messageList.map((message, idx) =>
                <ListItem key={idx}>
                    <ListItemText
                        primary={`Автор - ${message.author}. Текст - ${message.text}`}
                    />
                </ListItem>)
            }
            </List>
            <h4>{robot}</h4>
        </>
    );
};

export default ChatList;