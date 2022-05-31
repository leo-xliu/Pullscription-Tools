import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import DataBase from '../../Components/DataBase';
import Data from '../../Components/Data';
import CustomerProfileBase from '../../Components/CustomerProfileBase';
import Header from '../../Components/Header';
import {LoginContext} from '../../index';
export default function PulledComics() {

    const location = useLocation()
    const PULLEDCOMICS= location.state.PULLEDCOMICS

    console.log(PULLEDCOMICS)

    var images = PULLEDCOMICS.map(function(image) {
        return (<img src={image.IMAGE_URL_SMALL} rounded />);
       });
    const loggedIn = useContext(LoginContext)

    return(
        <div>       
            <Header loggedIn={loggedIn} user={"User"} />
            <h1>User Pulled Comics Page!!</h1>  
                {images}
            <li><Link to="/PullComics/PullByUser">BACK</Link></li>
            <hr/>
         </div>
    )
}
