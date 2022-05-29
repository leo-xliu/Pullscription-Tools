import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';

export default function ComicProfile() {

    const location = useLocation()
    const IMAGE_URL_SMALL = location.state.IMAGE_URL_SMALL
    
    const PUBLISHER = location.state.PUBLISHER
    const MAIN_DESC = location.state.MAIN_DESC
    //console.log(MAIN_DESC)
    //console.log(location.state.MAIN_DESC)
    const COVER_ARTIST = location.state.COVER_ARTIST
    const STREET_DATE = location.state.STREET_DATE
    const ARTIST = location.state.ARTIST
    const AUTHOR = location.state.AUTHOR
    

    return(
        
        <div>        
            <img src={IMAGE_URL_SMALL} alt="Logos" /> 

            <h6 style={{display: PUBLISHER ? "block" : "none"}}>
                {PUBLISHER}
            </h6>
            <h3 style={{display: MAIN_DESC ? "block" : "none"}}>
                {MAIN_DESC}
            </h3>

            <h5 style={{display: STREET_DATE ? "block" : "none"}}>
                Release Date: {STREET_DATE}
            </h5>
            <h5 style={{display: COVER_ARTIST ? "block" : "none"}}>
                Cover Artist: {COVER_ARTIST}
            </h5>
            <h5 style={{display: ARTIST ? "block" : "none"}}>
                Artist: {ARTIST}
            </h5>
            <h5 style={{display: AUTHOR ? "block" : "none"}}>
                Author: {AUTHOR}
            </h5>
            <h5 style={{display: AUTHOR ? "block" : "none"}}>
                Author: {AUTHOR}
            </h5>
            
            <li><Link to="/Inventory">BACK</Link></li>
            <hr/>
        </div>
    )
}
