import React, {useEffect, useState} from 'react';
import EnteringMessages from "../../component/EnteringMessages/EnteringMessages";
import './Chat.css'
import Messages from "../../component/Messages/Messages";

const Chat = () => {
    const [messages, setMessages] = useState([]);

    let url = 'http://146.185.154.90:8000/messages';

    useEffect(() => {
        let interval = setInterval (() => {
            let datetime = messages.length > 0 ? '?datetime='+messages[messages.length - 1].datetime : ''
            let messagesCopy = [...messages]
            const fetchData = async () => {
                const response = await fetch(url + datetime);
                if (response.ok) {
                    const messageList = await response.json();

                    messageList.map((item) => {
                        return messagesCopy.push(item)
                    })

                    setMessages(messagesCopy);
                }
            };

            fetchData().catch(e => console.error(e));
        },2000)

        return () => clearInterval(interval);
    });

    const addMessage = (event) => {
        event.preventDefault()
        const data = new URLSearchParams();

        data.set('message', event.target.text.value);
        data.set('author', event.target.author.value);
        const fetchData = async () => {
             await fetch(url,{method:'post',body:data});
        };
        event.target.reset();
        fetchData().catch(e => console.error(e));
    }

    return (

        <div className="chat">
            <div className="messages">
                {messages.map((message,index) => (
                    <Messages
                        key={index}
                        text={message.message}
                        author={message.author}
                        datetime={message.datetime}
                    />
                ))}
            </div>
            <EnteringMessages
                addMessage = {addMessage}
            />
        </div>
    );
};

export default Chat;