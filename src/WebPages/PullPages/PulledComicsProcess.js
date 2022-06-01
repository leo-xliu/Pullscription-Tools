
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {useState, useEffect} from "react";
import Header from '../../Components/Header';
import DataBase from '../../Components/DataBase';
import CustomerProfileBase from '../../Components/CustomerProfileBase';
import searchFanProfile from '../../Components/searchFanProfile';
import searchID from '../../Components/searchID';
import './PulledComicsProcess.css';

export default function PulledComicsProcess() {

    const[NUM, SETNUM] = useState(0)

    const location = useLocation()

    const FIRSTNAME = location.state.FIRSTNAME
    const LASTNAME = location.state.LASTNAME

    const PULLEDCOMICS = location.state.PULLEDCOMICS
    const PULLEDCOMICSSETASIDE = location.state.PULLEDCOMICSSETASIDE

    const id = location.state.PS_NO
    const MAIN_DESC = location.state.MAIN_DESC
    const PUBLISHER = location.state.PUBLISHER
    const IMAGE_URL_SMALL = location.state.IMAGE_URL_SMALL
    const EXPECTED_PULL = location.state.EXPECTED_PULL
    const NUM_COPY = location.state.NUM_COPY

    const constNum = NUM_COPY

    //console.log("Current_Comics:"+CURRENT_COMICS)

    const addOne = () => {
        SETNUM(NUM+1)
    }

    const minusOne = () => {
        if((NUM-1)<=0){
            SETNUM(0)
        }
        else{
            SETNUM(NUM-1)
        }
    }

    const addFive = () => {
        SETNUM(NUM+5)
    }

    const minusFive = () => {
        if((NUM-5)<=0){
            SETNUM(0)
        }
        else{
            SETNUM(NUM-5)
        }
    }

    return (
        <div>
            <Header/>
            <div className="user-comics-pull">
                <div className="user-comics-panel">
                    <img className="user-comics-cover" src={IMAGE_URL_SMALL}></img>
                    <div className="user-comics-info"> 
                        {/* {console.log("searchID: "+searchID(P))} */}
                        <p>{MAIN_DESC}</p>
                        <h6>{PUBLISHER}</h6>
                    </div>
                </div>
                <div className="function-pad">
                    <button className="function-pad-button" onClick={addFive}>+5</button>
                    <button className="function-pad-button" onClick={addOne}>+</button>
                    <div className="total-num">{NUM}</div>
                    <button className="function-pad-button" onClick={minusOne}>-</button>
                    <button className="function-pad-button" onClick={minusFive}>-5</button>
                </div>
            <div className="confirm-button-box">
                 <Link className="confirm-button" to='/PullComics/PullByUser'>CONFIRM</Link>
            </div>
            {/* <li><Link to="/PullComics/PullByWeek">Pull_By_Week</Link></li>
            <li><Link to="/PullComics/PullByUser">Pull_By_User</Link></li>
            <li><Link to="/">Main</Link></li> */}

                <div className="return-button">
                    <Link className="return-button-link" to="/PullComics/PullByUser">Return</Link>
                </div>
            </div>
        </div>
    )
}