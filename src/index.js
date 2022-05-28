
//initialize environment
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './WebPages/LoginPage';

//import webpages

//import Login from './LoginTo/login2';

//import CheckInPages
import CheckIn from './WebPages/CheckIn';
import PullByWeek from './WebPages/PullPages/PullByWeek';
import PullByUser from './WebPages/PullPages/PullByUser';
import ProfileSettings from './WebPages/ProfileSettings';

import Inventory from './WebPages/Inventory';

import FanManagement from './WebPages/FanManagements/FanManagement';
import FanProfile from './WebPages/FanManagements/FanProfile';

import ComicProfile from './WebPages/ComicProfile';

import PullComics from './WebPages/PullPages/PullComics';
import PulledComics from './WebPages/PullPages/PulledComics';

import Admin from './WebPages/Admin';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

//<Route path="/login" element={<Login/>} />
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/CheckIn" element={<CheckIn />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/PullComics" element={<PullComics />} />
                <Route path="/PullComics/PullByWeek" element={<PullByWeek />} />
                <Route path="/PullComics/PullByUser" element={<PullByUser />} />
                    <Route path="/PullComics/PullByUser/PulledComics" element={<PulledComics />} />

            <Route path="/ProfileSettings" element={<ProfileSettings />} />


            <Route path="/Inventory" element={<Inventory />} />
                <Route path="/Inventory/ComicProfile" element={<ComicProfile />} />
                {/* <Route path={"/Inventory/${data.MAIN_DESC}}"} element={<ComicProfile />} /> */}

            <Route path="/FanManagement" element={<FanManagement />} />
                <Route path="/FanManagement/FanProfile" element={<FanProfile />} />

            <Route path="/Admin" element={<Admin />} />

        </Routes>
          {/* <div>
            <ul>
              <li><Link to="/">Main</Link></li>

              <li><Link to="/CheckIn">CheckIn</Link></li>

              <li><Link to="/PullComics">Pull Comics</Link></li>

              <li><Link to="/ProfileSettings">Profile_Settings</Link></li>

              <li><Link to="/Inventory">Inventory</Link></li>
              
              <li><Link to="/FanManagement">Fan_Management</Link></li>
              
              <li><Link to="/Admin">Admin</Link></li>
            </ul>
          </div> */}
    </BrowserRouter>
);
