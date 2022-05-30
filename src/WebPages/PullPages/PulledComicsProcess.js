
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {useState, useEffect} from "react";
import Header from '../../Components/Header';
import DataBase from '../../Components/DataBase';
import '../Inventory.css'
import CustomerProfileBase from '../../Components/CustomerProfileBase';


export default function PulledComicsProcess() {

    const[NUM, SETNUM] = useState(0)

    const location = useLocation()
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
            <div>
                <img className="comic-cover" src={IMAGE_URL_SMALL}></img>
                <div className="comic-title"> 
                     <p>{MAIN_DESC}</p>
                     <h6>{PUBLISHER}</h6>
                </div>
                <button onClick={addFive}>+5</button>
                <button onClick={addOne}>+1</button>
                <div style={{ color: "green" }}>{NUM}</div>
                <button onClick={minusOne}>-1</button>
                <button onClick={minusFive}>-5</button>
            </div>
            <Link to='/PullComics/PullByUser'>Confirm</Link>
            {/* <li><Link to="/PullComics/PullByWeek">Pull_By_Week</Link></li>
            <li><Link to="/PullComics/PullByUser">Pull_By_User</Link></li>
            <li><Link to="/">Main</Link></li> */}
        </div>
    )
}