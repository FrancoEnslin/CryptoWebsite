import React, { useState } from "react";
import { ReactComponent as MenuIcon } from '../assets/icons/menuI.svg'



const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(prevIsExpanded => !prevIsExpanded);

    return (
        <div className='header-container'>
            <div className='logo'>TokenSwap</div>
            <div className='menu'>
                <div className='menu-links'>
                    <a href='/'>App</a>
                    <a href='/'>Product</a>
                    <a href='/'>Build</a>
                    <a href='/'>Careers</a>
                    <a href='/'>About</a>

                </div>
            </div>
            <div className='wallet-btn'>
                <button className='primary'>Enter App</button>
            </div>
            <button className='hamburger' onClick={toggleExpanded}>
                <MenuIcon />
            </button>

        </div>


    )
}

export default Header;
