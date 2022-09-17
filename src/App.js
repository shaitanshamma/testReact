import './App.css';
import {useEffect, useState} from "react";


function App() {

    const [messageList, setMessageList] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [robot, setRobot] = useState('');

    const nameHandler = (e) => {
        setAuthor(e.target.value)
    }
    const textHandler = (e) => {
        setText(e.target.value)
    }
    const messageHandler = () => {
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
        <div className="App">
            <input type="text" name="" id="" value={author} onChange={nameHandler}/>
            <input type="text" name="" id="" value={text} onChange={textHandler}/>
            <button onClick={messageHandler}>Вжух!</button>
            <ul>{messageList.map((message, idx) =>
                <li key={idx}>Автор - {message.author} <span>Текст - {message.text}</span></li>)}
            </ul>
            <h4>{robot}</h4>
        </div>
    );
}

export default App;
