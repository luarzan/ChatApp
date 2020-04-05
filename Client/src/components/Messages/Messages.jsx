import React from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from "../Message/Message";
import './Messages.css';

const Messages = ({messages,name}) => {

    return (
        <ScrollToBottom followButtonClassName='goDownBtn' className='messagesScroll'>
            {
                messages.map((mess,i)=>{
                    console.log('mess',mess);
                    return(
                        <div key={i}>
                            <Message
                                message={mess}
                                name={name}
                            />
                        </div>
                    )
                })
            }
        </ScrollToBottom>
    )

};

export default Messages;