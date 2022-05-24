import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';

export default function FanProfile() {

    const location = useLocation()
    const NAME = location.state.NAME
    console.log(NAME)
    //console.log(location.state.MAIN_DESC)
    const MARKS = location.state.MARKS
    const PHONE = location.state.PHONE
    const IMAGE_URL_SMALL = location.state.IMAGE_URL_SMALL

    return(
        
        <div>         
            <h3 style={{display: NAME ? "block" : "none"}}>
                NAME: {NAME}
            </h3>
            <h3 style={{display: MARKS ? "block" : "none"}}>
                MARKS: {MARKS}
            </h3>
            <h3 style={{display: PHONE ? "block" : "none"}}>
                DIAMOND_NO: {PHONE}
            </h3>
            <img src={IMAGE_URL_SMALL} alt="Logos" />
            <li><Link to="/Inventory">BACK</Link></li>
            <hr/>
        </div>
    )
}
