import React from 'react';
import { Link, useNavigate} from "react-router-dom";
import './Header.css';
import logo from "../Images/PSLOGO.png";
import usericon from "../Images/usericon.png";

function Header() {
  let navigate = useNavigate();
    return (
    <header> 
      <Link to="/"><img className="logo-main" title="return home" src={logo} alt="Pullscription Tools Edition" /></Link>
        <div className="header-user">
            <a className="user-button"/*onClick={handleProfileClick}*/ href='login'>
            <img className="usericon" src={usericon} alt="User"/>
            <div className="user-greeting"> 
                <h1 > Hello </h1>
                <p /* needs to use props later on */ > Sign in</p>
            </div>
            </a>
            <div /* this dropdown should only show if you are logged in */ class="dropdown-content">
              <a href="ProfileSettings">Settings</a>
              <a href="#">Logout</a>
          </div>
        </div>
    </header>
    );
}

export default Header;