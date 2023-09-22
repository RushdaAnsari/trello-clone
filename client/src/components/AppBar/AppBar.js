import  React from 'react';
import './AppBar.scss';
import logo from '../assets/logo.png';

const AppBar = () => {
    return (
        <>
            <nav className="navbar-app">
                <img className='logo' alt='logo' src={logo}/>
            Task Flow</nav>
        </>
    )

}

export default AppBar;