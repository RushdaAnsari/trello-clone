import  React from 'react';
import './AppBar.scss';
import logo from '../assets/dashboard.png';

const AppBar = () => {
    return (
        <>
            <nav className="navbar-app">
                <img className='logo' alt='logo' src={logo}/>
            Trello Clone</nav>
        </>
    )

}

export default AppBar;