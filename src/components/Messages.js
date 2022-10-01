import React, {useState} from 'react';
import {useParams} from "react-router-dom";

function Messages() {

    const chat_id = useParams().id;

    const [messages, setMessages] = useState([
        {
            message_id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vitae.',
            chat_id: 1
        },
        {
            message_id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vitae.',
            chat_id: 1
        },
        {
            message_id: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vitae.',
            chat_id: 2
        },
        {
            message_id: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vitae.',
            chat_id: 2
        },
        {
            message_id: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vitae.',
            chat_id: 3
        },
        {
            message_id: 6,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vitae.',
            chat_id: 3
        },
    ].filter((message) => message.chat_id === parseInt(chat_id)));

    return (
        <>
            {messages.map((message) => {
                return <div key={message.message_id}>{message.message_id} - {message.text} ({message.chat_id})</div>
            })}
        </>
    );
}

export default Messages;