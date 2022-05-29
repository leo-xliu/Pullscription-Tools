import React, {useContext}from 'react';
import MyComponent from './Components/MyComponent';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from "./Components/Header";
import {LoginContext, AdminContext} from './index';
import { Link} from 'react-router-dom';


function App() {
    const loggedIn = useContext(LoginContext)
    const isAdmin = useContext(AdminContext)
    return(
      <div>
          <Header loggedIn={loggedIn} /* want this to display user's name */ user={"User"} />
          <div className="main-menu">
            <nav>
              <ul>
                <li><Link className="menu-items" to={(loggedIn === true) ? '/CheckIn' : '/login'} >Check-In</Link></li>
                <li className="pullmenu"><Link className="menu-items" to={(loggedIn === true) ? '/PullComics/PullByUser' : '/login'}>Pull Comics</Link>
                    {/* <div class="pull-dropdown-content">
                    <a href="PullByWeek">By Week</a>
                    <a href="PullByUser">By User</a>
                    </div> */}
                    {/* did not have enough time to implement multiple pull features */}
                </li>
                <li><Link className="menu-items" to={(loggedIn === true) ? '/Inventory' : '/login'}>Inventory</Link></li>
                <li><Link className="menu-items" to={(loggedIn === true) ? '/FanManagement' : '/login'}>Fan Profiles</Link></li>
                {(isAdmin === true) ? <li><Link className="menu-items" to='/Admin'>Admin</Link></li> : ""}
              </ul>
            </nav>
          </div>
          <div className="main-content">
              <h1>Comics go here</h1> 
          </div> 
      </div>
    )
  }
export default App;