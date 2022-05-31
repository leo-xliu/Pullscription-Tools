
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {useState, useEffect} from "react";
import Header from '../../Components/Header';
import DataBase from '../../Components/DataBase';
import '../Inventory.css'
import CustomerProfileBase from '../../Components/CustomerProfileBase';
import searchFanProfile from '../../Components/searchFanProfile';
import searchID from '../../Components/searchID';

export default function PulledComicsProcess() {

    const[NUM, SETNUM] = useState(0)
    const[INITIAL, SETINITIAL] = useState(false)

    const location = useLocation()

    const FIRSTNAME = location.state.FIRSTNAME
    const LASTNAME = location.state.LASTNAME

    const PULLEDCOMICS = location.state.PULLEDCOMICS
    const PULLEDCOMICSSETASIDE = location.state.PULLEDCOMICSSETASIDE
    //const NUMS = searchID(PULLEDCOMICS, id)
    const id = location.state.PS_NO
    const MAIN_DESC = location.state.MAIN_DESC
    const PUBLISHER = location.state.PUBLISHER
    const IMAGE_URL_SMALL = location.state.IMAGE_URL_SMALL
    const EXPECTED_PULL = location.state.EXPECTED_PULL
    const NUM_COPY = location.state.NUM_COPY

    const NUM_ID = location.state.NUM

    const constNum = NUM_COPY

    //console.log("Current_Comics:"+CURRENT_COMICS)

    function addOne() {
        SETNUM(NUM+1)
    }

    function minusOne() {
        if((NUM-1)<=0){
            SETNUM(0)
        }
        else{
            SETNUM(NUM-1)
        }
    }

    function setTrue() {
        SETINITIAL(true)
    }

    function addFive() {
        SETNUM(NUM+5)
    }

    function minusFive() {
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
            <div>
                <img className="comic-cover" src={IMAGE_URL_SMALL}></img>
                <div className="comic-title"> 
                    {/* {console.log("searchID: "+searchID(P))} */}
                    {console.log("NUM: "+NUM_ID)}
                     <p>{MAIN_DESC}</p>
                     <h6>{PUBLISHER}</h6>
                </div>
                <button onClick={ () => {addFive(); setTrue()}}>+5</button>
                <button onClick={ () => {addOne(); setTrue() } }>+1</button>
                <div style={{ color: "green" }}>{NUM}</div>
                <button onClick={ () => {minusOne(); setTrue()}}>-1</button>
                <button onClick={ () => {minusFive(); setTrue()}}>-5</button>
                {console.log("NUM ID: "+searchID(PULLEDCOMICS, id))}
                <div style={{color: "yellow"}}>Copies Now:{{NUM_ID}+{NUM}})</div>
            </div>
            <Link to='/PullComics/PullByUser'>Confirm</Link>
            {/* <li><Link to="/PullComics/PullByWeek">Pull_By_Week</Link></li>
            <li><Link to="/PullComics/PullByUser">Pull_By_User</Link></li>
            <li><Link to="/">Main</Link></li> */}
        </div>
    )
}