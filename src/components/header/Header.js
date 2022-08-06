import React, { useEffect } from 'react';
import './Header.scss';

const Header = (props) => {
    
    useEffect(() => {
        document.getElementById("nav-list").firstChild.firstChild.classList.add("active");
    }, []);

    const clickHandler = (e) => {
        const navItems = document.getElementById("nav-list").childNodes;
        navItems.forEach(element => {
            element.firstChild.classList.remove("active");
        });
        e.target.classList.add("active");
    }

    return (
        <nav className='header-container'>
            <ul id="nav-list">
                {props.content.map((content, index) => { 
                    return <li key={index}>
                        <a href='#' onClick={clickHandler}>{content}</a>
                    </li>    
                })}
            </ul>
        </nav>
    )
}

export default Header;