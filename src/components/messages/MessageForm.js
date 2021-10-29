import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addMessage, getAllMessages } from '../../modules/MessageManager'
import "./Messages.css"


export const MessageForm = () => {
    let  date = new Date(Date.now())
//useState will hold the message sender, time, and message

    const [message, setMessage] = useState({
       id: "",
        userId:"",
        message:"",
        timestamp: date.toLocaleString()
    });



    const history = useHistory();
//makes copy of object and allows us to add our message
    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        const currentUser = parseInt(sessionStorage.getItem("petjenda_user"))
        let selectedVal = event.target.value
        if (event.target.id.includes(" ")) {
            selectedVal = parseInt(selectedVal)
        }
        newMessage[event.target.id] = selectedVal
        // update state
        newMessage.userId = currentUser
        setMessage(newMessage)
        
    }


//saves the message and 'redirects' user back to message page to see messages
    const handleClickSaveMessage = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
            addMessage(message)
                .then(() => history.push("/"))
    }
//return gives us the message form and allows us to add a message
    return (
        <form className="message-Form">
            <h2 className="message-Form__title">New Message</h2>
            <fieldset>
                <div className="form-group">
                    <input type="text" id="message" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="message" value={message.message}/>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveMessage}>
                Send
            </button>
        </form>
    )
};