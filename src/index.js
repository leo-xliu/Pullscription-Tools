/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );


  ReactDOM.render(<App/>, document.getElementById('root'));
*/

//initialize environment
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import webpages

//import CheckInPages
import CheckIn from './WebPages/CheckIn';
import PullByWeek from './WebPages/PullPages/PullByWeek';
import PullByUser from './WebPages/PullPages/PullByUser';
import ProfileSettings from './WebPages/ProfileSettings';

import Inventory from './WebPages/Inventory';
import FanManagement from './WebPages/FanManagement';
import PullComics from './WebPages/PullPages/PullComics';
import Admin from './WebPages/Admin';

//import PullScription Logo
import PSLOGO from './Images/logo.png'

//import Login from './Login';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
//<Route path="/login" element={<Login/>} />
root.render(
    <BrowserRouter>
          <Link to="/">
            <img src={PSLOGO} alt="Logo" width={500} height={150}/>
          </Link>
        <Routes>
          
            <Route path="/" element={<App/>} />

            <Route path="/CheckIn" element={<CheckIn />} />

            <Route path="/PullComics" element={<PullComics />} />
                <Route path="/PullComics/PullByWeek" element={<PullByWeek />} />
                <Route path="/PullComics/PullByUser" element={<PullByUser />} />

            <Route path="/ProfileSettings" element={<ProfileSettings />} />

            <Route path="/Inventory" element={<Inventory />} />

            <Route path="/FanManagement" element={<FanManagement />} />

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