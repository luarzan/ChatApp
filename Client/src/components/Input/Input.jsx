import React from "react";
import './Input.css';
import {ReactComponent as Rocket} from "../../assets/images/rocket.svg";

const Input = ({message,setMessage,sendMessage,btnSend}) => {
    return (
        <form className='inputWrapper full-width'>
            <textarea
                className='chatInput full-width'
                value={message}
                onChange={setMessage}
                onKeyPress={sendMessage}
                placeholder='Say hi...'
            />
            <button onClick={btnSend} className='sendBtn'>
                <Rocket/>
            </button>
        </form>
    )

};

export default Input;