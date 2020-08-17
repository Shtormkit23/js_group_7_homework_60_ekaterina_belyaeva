import React from "react";
import './Messages.css';

const Messages = props => (
    <div className="message">
        <div className="authorAndData">
            <p className="author">{props.author}</p>
            <p className="data">{props.datetime}</p>
        </div>
        <p className="text">{props.text}</p>
    </div>
);

export default Messages;