import React, { Component, useContext } from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import { LoginContext } from '../index';
import Header from '../Components/Header';
import './ComicProfile.css';

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
    


    const loggedIn = useContext(LoginContext)

    return(       
            
        <div>   
            <Header loggedIn={loggedIn} user={"User"} /> 
            <div className="comicprofile-page">
            <div className="comicprofile-page-inside">
                <div className="comicprofile-cover">
                    <img src={IMAGE_URL_SMALL} alt="Logos" /> 
                </div>
                <div className="comicprofile-info">
                    <div className="info-main">
                        <h2 style={{display: MAIN_DESC ? "block" : "none"}}>
                            {MAIN_DESC}
                        </h2>
                        <h6 style={{display: PUBLISHER ? "block" : "none"}}>
                            {PUBLISHER}
                        </h6> 
                    </div>
                    <div className="info-sub">
                        <h5 style={{display: STREET_DATE ? "block" : "none"}}>
                            <b>Release Date:</b> {STREET_DATE}
                        </h5>
                        <h5 style={{display: COVER_ARTIST ? "block" : "none"}}>
                            <b>Cover Artist:</b> {COVER_ARTIST}
                        </h5>
                        <h5 style={{display: ARTIST ? "block" : "none"}}>
                            <b>Artist:</b> {ARTIST}
                        </h5>
                        <h5 style={{display: AUTHOR ? "block" : "none"}}>
                            <b>Author:</b> {AUTHOR}
                        </h5>
                    </div>
                </div>
            </div>
            <div className="return-button">
                    <Link className="return-button-link" to="/Inventory">Return</Link>
            </div>
            </div>
        </div>
    )
}
