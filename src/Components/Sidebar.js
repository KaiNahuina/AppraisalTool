
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Logo from "../Media/CedaTex-Logo.png";

function Sidebar() {
    return (
        <div className='navigation'>
            <nav className='navbar'>
                <div className='container-fluid'>
                    <ul className="navbar-nav">
                        <li className='CedaTex'>
                            <img className="navbar-brand" src={Logo} alt="CedaTex Logo" />
                        </li>
                        <li>
                            <Link to="/home">
                                <ion-icon name="home"></ion-icon> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/myprojects">
                                <ion-icon name="file-tray-full"></ion-icon> My Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <ion-icon name="person"></ion-icon> Profile
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;


