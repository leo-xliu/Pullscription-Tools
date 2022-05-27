
//initialize environment
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './WebPages/LoginPage';

//import webpages

//import CheckInPages
import CheckIn from './WebPages/CheckIn';
import PullByWeek from './WebPages/PullPages/PullByWeek';
import PullByUser from './WebPages/PullPages/PullByUser';
import ProfileSettings from './WebPages/ProfileSettings';

import Inventory from './WebPages/Inventory';

import FanManagement from './WebPages/FanManagement';
import ComicProfile from './WebPages/ComicProfile';

import PullComics from './WebPages/PullPages/PullComics';
import Admin from './WebPages/Admin';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const LoginContext = React.createContext();

function Index() {
  const [loggedIn, setLoggedin] = useState(false);

  const handleLogin = info => {
    setLoggedin(info);
}

  return (
  <LoginContext.Provider value={loggedIn}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/CheckIn" element={<CheckIn />} />
            <Route path="/login" element={<LoginPage logged={handleLogin}/>} />
            <Route path="/PullComics" element={<PullComics />} />
                <Route path="/PullComics/PullByWeek" element={<PullByWeek />} />
                <Route path="/PullComics/PullByUser" element={<PullByUser />} />

            <Route path="/ProfileSettings" element={<ProfileSettings />} />

            <Route path="/Inventory" element={<Inventory />} />
                <Route path="/Inventory/ComicProfile" element={<ComicProfile />} />
                {/* <Route path={"/Inventory/${data.MAIN_DESC}}"} element={<ComicProfile />} /> */}

            <Route path="/FanManagement" element={<FanManagement />} />
          
            <Route path="/Admin" element={<Admin />} />
          </Routes>
    </BrowserRouter>
  </LoginContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

//<Route path="/login" element={<Login/>} />
root.render(
    <Index/>
);
