import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
const messageData = {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png',
    name: 'Roman',
    message: 'Hello',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <AlternativeMessage/>
        </div>
    )
}

export default HW1
