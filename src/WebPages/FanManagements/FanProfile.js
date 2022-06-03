import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {useState} from "react";
import FanComicsMapping from './FanComicsMapping';
import { LoginContext } from '../../index';
import Header from '../../Components/Header';
import './FanProfile.css';
import getUnique from '../../Components/getUnique';

export default function FanProfile() {

    const location = useLocation()
    const NAME = location.state.NAME
    console.log(NAME)

    const PULLEDCOMICS = location.state.PULLEDCOMICS
    const PULLEDCOMICSSETASIDE = location.state.PULLEDCOMICSSETASIDE
    const FULLFILLEDCOMICS = location.state.FULLFILLEDCOMICS
    const NEVERFULLFILLEDCOMICS = location.state.NEVERFULLFILLEDCOMICS
    const IMAGE_URL_SMALL = location.state.IMAGE_URL_SMALL

    var renderPULLEDCOMICS = getUnique(PULLEDCOMICS, "PS_NO")
    var renderPULLEDCOMICSSETASIDE = getUnique(PULLEDCOMICSSETASIDE, "PS_NO")
    var renderFULLFILLEDCOMICS = getUnique(FULLFILLEDCOMICS, "PS_NO")
    var renderNEVERFULLFILLEDCOMICS = getUnique(NEVERFULLFILLEDCOMICS, "PS_NO")

    var displayPCI = FanComicsMapping(PULLEDCOMICSSETASIDE, 0, FULLFILLEDCOMICS)

    var displayFFCI = FanComicsMapping(FULLFILLEDCOMICS, 1, FULLFILLEDCOMICS)

    console.log("renderPulledComicsSetAside Length: ")
    console.log(renderPULLEDCOMICSSETASIDE.length)
    console.log("renderFullFilledComics Length: ")
    console.log(renderFULLFILLEDCOMICS.length)

    var totalComics = (PULLEDCOMICS.length + PULLEDCOMICSSETASIDE.length + FULLFILLEDCOMICS.length + NEVERFULLFILLEDCOMICS.length)
    var purchaseRatio = ((totalComics - NEVERFULLFILLEDCOMICS.length) / totalComics)*100 // length of (fullfilledComics / neverfullfilledComics)

    const [Pulled, setPulled] = useState(false)
    const [Fullfilled, setFullfilled] = useState(false)
    const [Sort, setSort] = useState(false)

    var sortingData=[]

    function Sorting() {
        if(Pulled){
            sortingData = PULLEDCOMICS
        }
        if(Fullfilled){
            sortingData = FULLFILLEDCOMICS
        }
    }
    
    function pulledClick() {
        setPulled(!Pulled)
    }


    function fullfilledClick() {
        setFullfilled(!Fullfilled)
    }

    const loggedIn = useContext(LoginContext)
    return(
        
        <div>      
            <Header loggedIn={loggedIn} user={"User"} />
            <div className="fan-profile-page">

              <div className="fan-profile-panel">
                <div className="fan-profile-pic-container"> 
                  <img className="fan-profile-pic" src={IMAGE_URL_SMALL} alt="Logo" />   
                </div>
                <div className="fan-profile-info">
                  <h3 style={{display: NAME ? "block" : "none"}}>
                      {NAME}
                  </h3>
                  <h5>Total Pulls: <b>{(totalComics - NEVERFULLFILLEDCOMICS.length)}</b></h5>
                  <h5>Pull to Purchase Ratio: <b>{parseFloat(purchaseRatio).toFixed(2)}%</b></h5>
                </div>
              </div>
              <div className="PFbuttons">
              <div className="Pulled-section">
                <button className="Pulledbutton" Name="PButton" onClick={pulledClick}>Pulled</button>
                {(Pulled) ? <div className="comic-panels-2">{displayPCI}</div> : <div></div>}

              </div>
              <div className="Fullfilled-section">
                <button className="Fullfilledbutton" Name="FFButton" onClick={fullfilledClick}>Fullfilled</button>
                {(Fullfilled) ? <div className="comic-panels-2">{displayFFCI}</div> : <div></div>}
                </div>
                </div>
            <div className="return-button">
              <Link className="return-button-link" to="/FanManagement">Return</Link>
              </div> 
          </div>

        </div>
    )
}

