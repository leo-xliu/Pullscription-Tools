import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';

export default function ComicProfile() {

    const location = useLocation()
    const MAIN_DESC = location.state.MAIN_DESC
    //console.log(MAIN_DESC)
    //console.log(location.state.MAIN_DESC)
    const COVER_ARTIST = location.state.COVER_ARTIST
    const DIAMOND_NO = location.state.DIAMOND_NO
    const IMAGE_URL_SMALL = location.state.IMAGE_URL_SMALL

    return(
        
        <div>         
            <h3 style={{display: MAIN_DESC ? "block" : "none"}}>
                MAIN_DESC: {MAIN_DESC}
            </h3>
            <h3 style={{display: COVER_ARTIST ? "block" : "none"}}>
                COVER_ARTIST: {COVER_ARTIST}
            </h3>
            <h3 style={{display: DIAMOND_NO ? "block" : "none"}}>
                DIAMOND_NO: {DIAMOND_NO}
            </h3>
            <img src={IMAGE_URL_SMALL} alt="Logos" />
            <li><Link to="/Inventory">BACK</Link></li>
            <hr/>
        </div>
    )
}
