import React, {useState, useEffect, useCallback} from "react";
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css'
import Input from "../Input/Input";
import TopBar from "../TopBar/TopBar";
import Messages from "../Messages/Messages";

let socket;

const Chat = ({location}) => {

    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    const [isListOpen,setListOpen] = useState(false);
    const[users,setUsers] = useState([]);
    const ENDPOINT = 'https://astronaut-chat.herokuapp.com/';

    useEffect(()=>{
        const {name,room} = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        socket.emit('join',{name,room},()=>{
        });
        return ()=>{
            socket.emit('disconnect');
            socket.disconnect();
        }
    },[ENDPOINT,location.search]);


    useEffect(()=>{
        socket.on('message',(message)=>{
            return setMessages((msn)=>[...msn,message]);
        })
    },[]);

    useEffect(()=>{
        socket.on('roomData',({users})=>{
            return setUsers([...users]);
        });
    },[]);

    const sendMessage = useCallback((e)=>{
        e.preventDefault();
        if(message){
            return socket.emit('sendMessage',message,()=>setMessage(''))
        }
    },[message]);

    const capitalizeFirstLetter = useCallback((string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },[]);

    const handleInputMessage = useCallback((e)=>{
            setMessage(capitalizeFirstLetter(e.target.value));
    },[capitalizeFirstLetter]);

    const handleSendMessage = useCallback((e)=>{
        return e.key === 'Enter'? sendMessage(e): null
    },[sendMessage]);

    const toggleList = useCallback(()=>{
            if(isListOpen){
                setListOpen(false)
            }else{
                setListOpen(true)
            }
    },[isListOpen]);

    return (
        <div className='chatContainer'>
            <div className='chatInnerContainer'>
                <div className='chatBody'>
                    {isListOpen &&
                    <div onClick={toggleList} className='closeOverlay' />
                    }
                    <TopBar
                        room={room}
                        name={name}
                        openUsersList={toggleList}
                    />
                    <Messages
                        messages={messages}
                        name={name}
                    />
                    <Input
                        setMessage={handleInputMessage}
                        sendMessage={handleSendMessage}
                        btnSend={sendMessage}
                        message={message}
                    />
                </div>
                <div className={'chatDirectory ' + (isListOpen ? 'openList' : '')}>
                    <div className='directoryHeader'>
                        <p className='directoryTitle'>Astronautas</p>
                    </div>
                    <div className='userCard-container'>
                        {users.map((user,i) =>{
                            return(
                                <div key={i} className='userCard full-width'>
                                    <div className='statusSymbol online' />
                                    <p className='userCard-name'>{user.name}</p>
                                </div>
                            )
                             }
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )

};

export default Chat;