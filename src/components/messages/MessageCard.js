import React from 'react';
import { useHistory } from 'react-router';
import "./Messages.css"

export const MessagesCard = ({ message, handleDeleteMessage, setMessages }) => {
    const history = useHistory();
    //return shows the message to the DOM
    const currentUser = parseInt(sessionStorage.getItem("petjenda_user"))
    return (
        <>
            <div className="mess-card">
                <p>{message.user?.name}</p>
                <p className="card-message-text"><span className="card-message">
                 {message.message}
                </span></p>
                <p>Sent at: {message.timestamp}</p>

                {message.userId === currentUser && <div className="buttons">
  
  
    <button className="button-delete-message" type="button" onClick={() => handleDeleteMessage(message.id)}>
  delete </button>

  
  </div>}

            </div>
        </>
    )
}
