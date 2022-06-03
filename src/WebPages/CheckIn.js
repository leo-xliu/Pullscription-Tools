import React, {  useContext } from 'react';
import Header from "../Components/Header";
import { LoginContext } from '../index';

import CsvReader from '../Components/CsvReader';

import './CheckIn.css';

export default function CheckIn() {

    const loggedIn = useContext(LoginContext)

    function refreshPage() {
      window.location.reload(false);
    }
    
    return (
        <div>
            <Header loggedIn={loggedIn} /* want this to display user's name */ user={"User"} />
            <div className="checkin-page">
              <div className="checkin-title">
                <h1>CHECK-IN</h1>
                <h5>Import Your CSV File</h5>
              </div>
                <CsvReader/>
              <div className="checkin-button">
                <button> Continue </button>
              </div>
            </div>

        </div>
    )
}
