import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import DataBase from '../../Components/DataBase';
import Data from '../../Components/Data';
import CustomerProfileBase from '../../Components/CustomerProfileBase';
import {useState, useEffect} from "react";
import Header from '../../Components/Header';
import Inventory from '../Inventory';
import '../Inventory.css';
import getUnique from '../../Components/getUnique';
import searchID from '../../Components/searchID';

// this web is similar to FanComicsMapping

export default function UserPulledComics() {

    const location = useLocation()
    const PULLEDCOMICS= location.state.PULLEDCOMICS
    const PULLEDCOMICSSETASIDE = location.state.PULLEDCOMICSSETASIDE
    const THIS_FIRSTNAME = location.state.FIRSTNAME
    const THIS_LASTNAME = location.state.LASTNAME

    const [query, setQuery] = useState("")

    console.log(PULLEDCOMICS)

    const renderPULLEDCOMICS = getUnique(PULLEDCOMICS, "PS_NO")
    const renderPULLEDCOMICSSETASIDE = getUnique(PULLEDCOMICSSETASIDE, "PS_NO")

      // var images = PULLEDCOMICS.map(function(image) {
      //   return (<img src={image.IMAGE_URL_SMALL} rounded />);
      //  });

      //  var images2 = PULLEDCOMICSSETASIDE.map(function(image) {
      //   return (<img src={image.IMAGE_URL_SMALL} rounded />);
      //  });

       var userPulledComics = renderPULLEDCOMICS.filter(data => {
        if (query === '') {
          return data;
        } else if (data.MAIN_DESC.toLowerCase().includes(query.toLowerCase())) {
          return data;
        }
      }).map((data, index) => (
        <div key={index}>
          <Link to="/PullComics/PullByUser/PulledComics/PulledComicsProcess"
              state={{
                  FIRSTNAME: THIS_FIRSTNAME,
                  LASTNAME: THIS_LASTNAME,
                  PULLEDCOMICS: PULLEDCOMICS,
                  PULLEDCOMICSSETASIDE: PULLEDCOMICSSETASIDE,
                  CURRENT_COMICS: data.PS_NO,
                  MAIN_DESC: data.MAIN_DESC,
                  PUBLISHER: data.PUBLISHER,
                  IMAGE_URL_SMALL: data.IMAGE_URL_SMALL,
              }}
          >
            <img className="comic-cover" src={data.IMAGE_URL_SMALL} alt="Logo" />
          </Link>
          <div className="comic-title"> 
            <p>{data.MAIN_DESC}</p>
            <h6>{data.PUBLISHER}</h6>
            <h4>{searchID(PULLEDCOMICS, data.PS_NO)} {(searchID(PULLEDCOMICS, data.PS_NO)>1)?"Copies":"Copy"}</h4>
            {console.log("UserPulledComics: firstname: lastname: "+THIS_FIRSTNAME+" "+THIS_LASTNAME)}
          </div>
        </div>
      ))

    return(
        <div> 
            <Header/>      
            <h1>User Pulled Comics Page!!</h1>  
            <input placeholder="Enter Comic Title" onChange={event => setQuery(event.target.value)} />
            {
                <div>{userPulledComics}</div>
            }
            <li><Link to="/PullComics/PullByUser">BACK</Link></li>
            <hr/>
            </div>
    )
}
