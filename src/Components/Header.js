import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import logo from "../Images/PSLOGO.png";
import usericon from "../Images/usericon.png";

function Header(props) {
    return (
    <header> 
      <Link to="/"><img className="logo-main" title="return home" src={logo} alt="Pullscription Tools Edition" /></Link>
        <div className="header-user">
            <a className="user-button" href={(props.loggedIn === false) ? ('login') : null}>
            <img className="usericon" src={usericon} alt="User"/>
            <div className="user-greeting"> 
                <h1 > Hello </h1>
                <p > {(props.loggedIn === true) ? (props.user) : ("Sign in")}</p>
            </div>
            </a>
            {(props.loggedIn === true) ? (<div /* this dropdown should only show if you are logged in */ class="dropdown-content">
              <Link to="/ProfileSettings">Settings</Link>
              <a href="/">Logout</a> 
              {/*     use buttons here instead
                      const Logout = () => {
                         logged(false)
              } */}
          </div>) : ""}
        </div>
    </header>
    );
}

export default Header;