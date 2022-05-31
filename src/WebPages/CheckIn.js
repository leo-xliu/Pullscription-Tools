import React, { Component, useContext } from 'react';
import Header from "../Components/Header";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { LoginContext } from '../index';

import { useState } from "react";
import Papa from "papaparse";

import logo1 from '../Images/Diamond_CheckIn.png'

export default function CheckIn() {

    const loggedIn = useContext(LoginContext)
    
    return (
        <div>
            <Header loggedIn={loggedIn} /* want this to display user's name */ user={"User"} />
            <h1>CheckIn Page!!</h1>
            <img src={logo1} />
            {CSV()}
            <li><Link to="/">Main</Link></li>
        </div>
    )
}

function CSV() {
    // State to store parsed data
    const [parsedData, setParsedData] = useState([]);
  
    //State to store table Column name
    const [tableRows, setTableRows] = useState([]);
  
    //State to store the values
    const [values, setValues] = useState([]);
  
    const changeHandler = (event) => {
      // Passing file data (event.target.files[0]) to parse using Papa.parse
      Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          const rowsArray = [];
          const valuesArray = [];
  
          // Iterating data to get column name and their values
          results.data.map((d) => {
            rowsArray.push(Object.keys(d));
            valuesArray.push(Object.values(d));
          });
  
          // Parsed Data Response in array format
          setParsedData(results.data);
  
          // Filtered Column Names
          setTableRows(rowsArray[0]);
  
          // Filtered Values
          setValues(valuesArray);
        },
      });
    };
  
    return (
      <div>
        {/* File Uploader */}
        <input
          type="file"
          name="file"
          onChange={changeHandler}
          accept=".csv"
          style={{ display: "block", margin: "10px auto" }}
        />
        <br />
        <br />
        {/* Table */}
        <table>
          <thead>
            <tr>
              {tableRows.map((rows, index) => {
                return <th key={index}>{rows}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {values.map((value, index) => {
              return (
                <tr key={index}>
                  {value.map((val, i) => {
                    return <td key={i}>{val}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
