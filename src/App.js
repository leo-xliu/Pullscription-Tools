import React, {useContext}from 'react';
import './App.css';
import Header from "./Components/Header";
import {LoginContext, AdminContext} from './index';
import { Link} from 'react-router-dom';


function App() {
    const loggedIn = useContext(LoginContext)
    const isAdmin = useContext(AdminContext)
    return(
      <div className="home-page">
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


          {/* carousel 1 */}
          <div className="main-content">
            
            <div className="car-title">
              <h2>TOP COMICS</h2>
            </div>
              <div className="car-container">
                <div className="car-scroller">
                  {/* group 1 */}
                  <div className="car-group" id="group1">
                    <div className="car-element">
                      <img src={require("./homecomics/DC1.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/DC2.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/DC3.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/DC4.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/DC13.jpg")} alt="Cover Photo"/>
                    </div>
                    <a className="next" href={"#group2"}>
                      <svg>
                        <use href="#next"></use>
                      </svg>
                    </a>
                  </div>
                  {/* group 2 */}
                  <div className="car-group" id="group2">
                    <a className="prev" href={"#group1"}>
                      <svg>
                        <use href="#prev"></use>
                      </svg>
                    </a>
                    <div className="car-element">
                      <img src={require("./homecomics/DC5.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/DC6.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/DC7.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/DC8.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/DC14.jpg")} alt="Cover Photo"/>
                    </div>
                    <a className="next" href={"#group3"}>
                      <svg>
                          <use href="#next"></use>
                      </svg>
                    </a>
                  </div>
                  {/* group 3 */}
                  <div className="car-group" id="group3">
                    <a className="prev" href={"#group2"}>
                      <svg>
                        <use href="#prev"></use>
                      </svg>
                    </a>
                    <div className="car-element">
                      <img src={require("./homecomics/DC9.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/DC10.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/DC11.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/DC12.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/DC15.jpg")} alt="Cover Photo"/>
                    </div>
                    <a className="next" href={"#group4"}>
                      <svg>
                          <use href="#next"></use>
                      </svg>
                    </a>
                  </div>
                  {/* group 4 */}
                  <div className="car-group" id="group4">
                    <a className="prev" href={"#group3"}>
                      <svg>
                        <use href="#prev"></use>
                      </svg>
                    </a>
                    <div className="car-element">
                      <img src={require("./homecomics/MC1.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/MC2.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/MC3.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/MC4.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/MC5.jpg")} alt="Cover Photo"/>
                    </div>
                    <a className="next" href={"#group5"}>
                      <svg>
                          <use href="#next"></use>
                      </svg>
                    </a>
                  </div>
                  {/* group 5 */}
                  <div className="car-group" id="group5">
                    <a className="prev" href={"#group4"}>
                      <svg>
                        <use href="#prev"></use>
                      </svg>
                    </a>
                    <div className="car-element">
                      <img src={require("./homecomics/MC6.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/MC7.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/MC8.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/MC9.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/MC10.jpg")} alt="Cover Photo"/>
                    </div>
                    <a className="next" href={"#group6"}>
                      <svg>
                          <use href="#next"></use>
                      </svg>
                    </a>
                  </div>
                  {/* group 6 */}
                  <div className="car-group" id="group6">
                    <a className="prev" href={"#group5"}>
                      <svg>
                        <use href="#prev"></use>
                      </svg>
                    </a>
                    <div className="car-element">
                      <img src={require("./homecomics/MC11.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/MC12.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/MC13.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/MC14.jpg")} alt="Cover Photo"/>
                    </div>
                    <div className="car-element">
                      <img src={require("./homecomics/MC15.jpg")} alt="Cover Photo"/>
                    </div>
                    <a className="next" href={"#group1"}>
                      <svg>
                          <use href="#next"></use>
                      </svg>
                    </a>
                  </div>
                  <div class="navigation-indicators">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>

            </div>  
          </div>
                  
          
          
          

        {/* buttons for carousel  */}
        <svg>
          <symbol id="next" viewBox="0 0 256 512">
            <path fill="white"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
          </symbol>

          <symbol id="prev" viewBox="0 0 256 512">
            <path fill="white"
              d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
          </symbol>
        </svg>

      </div>
      
    )
  }
export default App;