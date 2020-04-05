import React from "react";
import './Message.css';
import ReactEmoji from 'react-emoji';
import {ReactComponent as Avatar1} from "../../assets/images/astronautAvatar.svg";
import {ReactComponent as Avatar2} from "../../assets/images/alien.svg";


const Message = ({message:{user,text},name}) => {



    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser ?
            (
                <div className='messageContainer justifyEnd'>
                    <div className='messageBox me'>
                        <p className='text me'>{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            : (
                <div className='messageContainer justifyStart'>
                    {user === 'admin' ?
                        <div className='messageImg adminUser'>
                            <Avatar1/>
                        </div>
                        :
                        <div className='messageImg'>
                            <Avatar2/>
                        </div>
                    }
                    <div className={'messageBox ' + (user === 'admin' ? 'adminUser' :'otherUser')}>
                        <p className={'userName ' + (user === 'admin' ? 'adminUser' :'otherUser')}>{user}</p>
                        <p className='text user'>{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
    )

};

export default Message;