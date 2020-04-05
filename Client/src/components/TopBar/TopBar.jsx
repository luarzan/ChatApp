import React from "react";
import './TopBar.css'
import {ReactComponent as Planet} from "../../assets/images/planet.svg";

const TopBar = ({room,name,openUsersList}) => {
    return (
        <div className='TopBar'>
            <div className='roomAndStatus'>
                <div className='statusSymbol online' />
                <p>{name}</p>
            </div>
            <div onClick={openUsersList} className='room'>
                <Planet/>
                <p>{room}</p>
            </div>
        </div>
    )

};

export default TopBar;