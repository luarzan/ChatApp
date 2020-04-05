import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Astronaut} from "../../assets/images/astronaut.svg";
import {ReactComponent as Satellite} from "../../assets/images/space.svg";
import {ReactComponent as Rocket} from "../../assets/images/rocket.svg";
import {ReactComponent as Moon} from "../../assets/images/moon.svg";
import {ReactComponent as Shine} from "../../assets/images/shine.svg";
import './Join.css'

const Join = () => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');

    const handleName = useCallback((e)=>{
        const {value} = e.target;
        setName(value);
    },[]);
    const handleRoom = useCallback((e)=>{
        const {value} = e.target;
        setRoom(value);
    },[]);

    const validateFields = useCallback((e)=>{
            return (!name || !room) ? e.preventDefault() : null
    },[name,room]);

    return (
        <div className='joinOuterContainer'>
            <div className='joinMainContainer'>
                <div className='joinInnerContainer'>
                    <div className='joinForm full-width animated fadeInDown slow'>
                        <h1  className='heading'>Join</h1>
                        <div>
                            <input
                                placeholder="Name"
                                className='input mt-20 full-width'
                                type='text'
                                onChange={handleName}
                            />
                            </div>
                            <div>
                                <input
                                    placeholder="Room"
                                    className='input mt-20 full-width'
                                    type='text'
                                    onChange={handleRoom}
                                />
                            </div>
                            <Link onClick={validateFields} to={`/chat/?name=${name}&room=${room}`}>
                                <button className='button mt-20 full-width' type='submit'>Sign In</button>
                            </Link>
                    </div>
                </div>
                <div className='joinImageSide'>
                    <p className='advice'>(itakat esta en el 3001)</p>
                    <p className='welcome'>Bienvenido a mi puerto 3000</p>
                    <Moon className='moon'/>
                    <Astronaut className='astronaut'/>
                    <Satellite className='satellite'/>
                    <Rocket className='rocket'/>
                    <Shine className='shine s-1' />
                    <Shine className='shine s-2' />
                    <Shine className='shine s-3' />
                    <Shine className='shine s-4' />
                    <Shine className='shine s-5' />
                </div>
            </div>
        </div>
    )

};

export default Join;