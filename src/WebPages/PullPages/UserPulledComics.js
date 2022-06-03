import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {useState, useContext} from "react";
import Header from '../../Components/Header';
import '../Inventory.css';
import getUnique from '../../Components/getUnique';
import searchID from '../../Components/searchID';
import { LoginContext} from '../../index';

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


       
       var userPulledComics = renderPULLEDCOMICS.filter(data => {
        if (query === '') {
          return data;
        } else if (data.MAIN_DESC.toLowerCase().includes(query.toLowerCase())) {
          return data;
        }
      }).map((data, index) => (
        <div className="comic-panel-single" key={index}>
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
            <p >{data.MAIN_DESC}</p>
            <h6>{data.PUBLISHER}</h6>
            <h4>{searchID(PULLEDCOMICS, data.PS_NO)} {searchID(PULLEDCOMICS, data.PS_NO>1)?"Copies":"Copy"}</h4>
            {console.log("UserPulledComics: firstname: lastname: "+THIS_FIRSTNAME+" "+THIS_LASTNAME)}
            {console.log(PULLEDCOMICS)}
          </div>
        </div>
      ))
    const loggedIn = useContext(LoginContext)
    return(
        <div> 
            <Header loggedIn={loggedIn} user={"User"} />     
            <div className="inventory">
              <div className="searchbar">
                <input placeholder="Enter Comic Title" onChange={event => setQuery(event.target.value)} />
              </div>
              <div className="extra-padding">
              </div>
              <div className="comic-panels">
                  {userPulledComics}
              </div>
              <div className="return-button">
                <Link className="return-button-link" to="/PullComics/PullByUser">Return</Link>
              </div>
            </div>
          </div>
    )
}
