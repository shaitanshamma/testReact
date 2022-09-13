import './App.css';
import Message from "./components/Message";

function App() {
    let name = 'Vasya';
    let lastName = 'Ivanov';
    return (
        <div className="App">
            <Message name={name} lastName = {lastName}/>
        </div>
    );
}

export default App;
