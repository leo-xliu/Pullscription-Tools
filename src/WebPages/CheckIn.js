import React, { useContext } from 'react';
import Header from "../Components/Header";
import { Link } from 'react-router-dom';
import { LoginContext } from '../index';

import { useState } from "react";
import Papa from "papaparse";

import CsvReader from '../Components/CsvReader';

export default function CheckIn() {

    const loggedIn = useContext(LoginContext)

    function refreshPage() {
      window.location.reload(false);
    }
    
    return (
        <div>
            <Header loggedIn={loggedIn} /* want this to display user's name */ user={"User"} />
            <h1>CheckIn</h1>
            <h5>Import Your CSV File</h5>
            <button onClick={refreshPage}>Click to reload!</button>
             <CsvReader/>
            {console.log("hello")}
            <li><Link to="/">Back</Link></li>
        </div>
    )
}
