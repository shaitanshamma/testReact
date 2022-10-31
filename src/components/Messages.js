import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useState} from "react";
import {store} from "../store/storeConfig";


function Messages() {

    const [text, setText] = useState('');

    const chat_id = parseInt(useParams().id);

    const messageList = useSelector((state) => state.messageReducer.messageList.filter(message => message.chat_id === chat_id))

    const dispatch = useDispatch();

    function deleteMessage(id) {
        dispatch({type: 'delete', payload: id})
    }

    const textHandler = (e) => {
        setText(e.target.value)
    }

    const messageHandler = (event) => {
        event.preventDefault()
        let message_id = messageList.length? messageList[messageList.length - 1].message_id + 1: 1;
        let message = {message_id: message_id, text: text, chat_id: chat_id}
        dispatch({type: 'addMessage', payload: message})
        setText('');
    }

    return (
        <>
            <form onSubmit={messageHandler} style={{marginBottom: '30px', marginTop: '30px'}}>
                <TextField
                    id="outlined-name"
                    label="Text"
                    value={text}
                    autoFocus
                    onChange={textHandler}
                />
                <Button variant="contained" endIcon={<SendIcon/>} type={'submit'}
                        sx={{ml: '20px'}}>
                    Вжух!
                </Button>
            </form>

            {messageList.map((message) => {
                return (
                    <div key={message.message_id}>
                        <p>{message.message_id} - {message.text} ({message.chat_id})</p>
                        <Button variant="contained" style={{backgroundColor: 'red'}}
                                onClick={() => deleteMessage(message.message_id)}>Delete</Button>
                    </div>)
            })}
            <h4></h4>
        </>
    );
}

export default Messages;