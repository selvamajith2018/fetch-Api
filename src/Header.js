import React from 'react'

function Header() {
    return (
        <div>
            <nav className="container-fluid navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand ps-3" href="/Home"><i class="fa-solid fa-people-roof fa-xl" style={{color:'yellow'}}></i></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-light" style={{fontSize:'20px',fontWeight:'700'}} href="/Home"><i class="fa-solid fa-house fa-sm" style={{color:' #ffffff'}} ></i> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" style={{fontSize:'20px',fontWeight:'700'}} href="/EmpList"> <i class="fa-solid fa-list-check fa-sm" style={{color:' #ffffff'}}></i>&nbsp; Employee List</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header