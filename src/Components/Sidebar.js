function Sidebar() {
    return (
      <div className='navigation'>
          <nav className='navbar navbar-default fixed-top'>
              <div className='container-fluid'>
                  <ul className="nav navbar-nav">
                          <li>
                              <Link to="">
                              <ion-icon name="">Home</ion-icon>
                              </Link>
                          </li>
                          <li>
                              <Link to="">
                              <ion-icon name="">Projects</ion-icon>
                              </Link>
                          </li>
                          <li>
                              <Link to="">
                              <ion-icon name="">About</ion-icon>
                              </Link>
                          </li>
                          
                      </ul>
                  </div>
              </nav>
          
      </div>
    )
  }
  
  export default Sidebar