import React from 'react'
import './MessageBox.css'

const MessageBox = (props) => {
    return (
        <div className="testimonial-container">
            <div className="profile-image-container">
                <img 
                    src={props.image} 
                    alt="Profile" 
                    className="profile-image" 
                />
            </div>
            <div className="message-container">
                <h4 className="name">{props.name}</h4>
                <p className="message">{props.message}</p>
            </div>
        </div>
    )
}

export default MessageBox