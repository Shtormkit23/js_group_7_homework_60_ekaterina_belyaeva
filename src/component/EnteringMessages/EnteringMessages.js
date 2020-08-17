import React from "react";
import './EnteringMessages.css';

const EnteringMessages = props => (
    <form onSubmit={props.addMessage}>
        <div className="form-group">
            <div className="column-1">
                <input name="author" type="text" className="form-control author-input" placeholder="Имя" id="author"/>
            </div>
            <div className="column-2">
                <textarea name="text" className="form-control message-form message-input" placeholder="Текст сообщения"
                          id="message-form"/>
            </div>
        </div>
        <button type="submit" className="btn-send" id="button">Send</button>
    </form>
);

export default EnteringMessages;
