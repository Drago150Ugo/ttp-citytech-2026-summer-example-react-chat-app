import {useState} from 'react';
import Message from './components/Message';
import Listener from './components/Listener';
import './App.css';
import ReactImage from  './assets/react.svg';

const App = () => {
    //
    // business logic
    //

    const [messages, setMessages] = useState<string[]>([]);

    return <>
        <h1>
            Chatroom
        </h1>

        {
            messages.map((text, index) =>
                <div key={index}>
                    <Message text={text} />
                    <Listener response={text} />
                </div>
            )
        }

        <form onSubmit={(event) => {
            event.preventDefault();

            // determine what the new message is
            const new_message = event.target.incoming_text.value;

            // add the new message to the message state
            setMessages([...messages, new_message]);

            // note: this is not best practice in react but it works for now
            event.target.incoming_text.value = '';
            

        }}>
        <input name='incoming_text' id='incoming_text' />
        <button type='submit'>
            <img src={ReactImage} alt = "Send"/>
            
        </button>
        </form>
    </>;
}

export default App;