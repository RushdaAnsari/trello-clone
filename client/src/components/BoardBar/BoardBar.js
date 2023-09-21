import React from "react";
import './BoardBar.scss';
import dashboard from '../../assets/dashboard.png'

const BoardBar = () => {
    return (
        <>
            <nav className="navbar-board"> 
            
            <img className="dashboard-logo" src={dashboard}/>
            Dashboard</nav>
        
        </>
    )
}

export default BoardBar;