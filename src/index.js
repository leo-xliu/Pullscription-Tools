
//initialize environment
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './WebPages/LoginPage';

import CheckIn from './WebPages/CheckIn';

import PullByUser from './WebPages/PullPages/PullByUser';
import ProfileSettings from './WebPages/ProfileSettings';

import Inventory from './WebPages/Inventory';

import FanManagement from './WebPages/FanManagements/FanManagement';
import FanProfile from './WebPages/FanManagements/FanProfile';

import ComicProfile from './WebPages/ComicProfile';

import PulledComicsProcess from './WebPages/PullPages/PulledComicsProcess';
import UserPulledComics from './WebPages/PullPages/UserPulledComics';

import Admin from './WebPages/Admin';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const LoginContext = React.createContext();
export const AdminContext = React.createContext();


function Index() {
  const [loggedIn, setLoggedin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const employees = new Map();
  employees.set("psemploy", "employ1");

  const handleAddUser = info => {
    if (employees.get(info.username) !== undefined){
      return 1;
    }
    else if (info.password.length < 6) {
      return 2;
    }
    else {
      employees.set(info.username, info.password);
    }
  }

  const handleRemUser = info => {
    if (employees.get(info.username) !== undefined) {
      employees.delete(info.username);
    }
    else {
      //setRemError("User does not exist!");
    }
  }

  const handleEmploy = info => {
    if (info.password === employees.get(info.username)) {
      return 0;
    }
    else if (employees.get(info.username) !== undefined){
      return 1;
    }
    else {
      return 2
    }
  }

  const handleLogin = info => {
    setLoggedin(info);
}

  const handleAdmin = info => {
    setIsAdmin(info);
  }

  return (
  <LoginContext.Provider value={loggedIn}>
  <AdminContext.Provider value={isAdmin}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/CheckIn" element={<CheckIn />} />
            <Route path="/login" element={<LoginPage logged={handleLogin} admin={handleAdmin} employ={handleEmploy}/>} />
            
                <Route path="/PullComics/PullByUser" element={<PullByUser />} />
                    <Route path="/PullComics/PullByUser/PulledComics" element={<UserPulledComics />} />
                        <Route path="/PullComics/PullByUser/PulledComics/PulledComicsProcess" element={<PulledComicsProcess />} />
                        
            <Route path="/ProfileSettings" element={<ProfileSettings />} />


            <Route path="/Inventory" element={<Inventory />} />
                <Route path="/Inventory/ComicProfile" element={<ComicProfile />} />

            <Route path="/FanManagement" element={<FanManagement />} />
                <Route path="/FanManagement/FanProfile" element={<FanProfile />} />

            <Route path="/Admin" element={<Admin/>} />
          </Routes>
    </BrowserRouter>
  </AdminContext.Provider>
  </LoginContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Index/>
);
