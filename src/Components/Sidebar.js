import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import Logo from "../Media/CedaTex-Logo.png"

function Sidebar() {
    return (
      <div className='navigation'>
        
          <nav className='navbar navbar-default'>
              <div className='container-fluid'>
                  <ul className="nav navbar-nav">
                          <li className='CedaTex'>
                            <img class="navbar-brand" src={Logo}/>
                          </li>
                          <li>
                              <Link to="/home">
                              <ion-icon name="home">Home</ion-icon>
                              </Link>
                          </li>
                          <li>
                              <Link to="/myprojects">
                              <ion-icon name="file-tray-full">My Projects</ion-icon>
                              </Link>
                          </li>
                          <li>
                              <Link to="/profile">
                              <ion-icon name="person">Profile</ion-icon>
                              </Link>
                          </li>
                    </ul>

                </div>

            </nav>
          
        </div>
    )
  }
  
  export default Sidebar