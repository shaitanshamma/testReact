import React from 'react';

function Message({name, lastName}) {
    return (
        <div className="Message">{name} {lastName}</div>
    );
}

export default Message;