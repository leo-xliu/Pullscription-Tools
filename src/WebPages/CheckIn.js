import React, { Component, useContext } from 'react';
import Header from "../Components/Header";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { LoginContext } from '../index';

import { useState } from "react";
import Papa from "papaparse";

import logo1 from '../Images/Diamond_CheckIn.png'
import CsvReader from '../Components/CsvReader';

import DataBase from '../Components/DataBase';

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
            {/* <button onclick='processFile()'>Process</button> */}
             <CsvReader/>
            {console.log("hello")}
            <li><Link to="/">Back</Link></li>
        </div>
    )
}

function processFile(){
  var file = document.querySelector('#myFile').files[0];
  var reader = new FileReader();
  reader.readAsText(file);

  //if you need to read a csv file with a 'ISO-8859-1' encoding
  /*reader.readAsText(file,'ISO-8859-1');*/

  //When the file finish load
  reader.onload = function(event) {

    //get the file.
    var csv = event.target.result;

    //split and get the rows in an array
    var rows = csv.split('\n');

    //move line by line
    for (var i = 1; i < rows.length; i++) {
      //split by separator (,) and get the columns
      var cols = rows[i].split(',');

      //move column by column
      for (var j = 0; j < cols.length; j++) {
        /*the value of the current column.
        Do whatever you want with the value*/
        var value = cols[j];
      }
    }
  }
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
          console.log("results.data")
          console.log(results.data)
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

