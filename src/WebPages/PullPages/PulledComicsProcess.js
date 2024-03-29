
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {useState, useEffect} from "react";
import Header from '../../Components/Header';
import searchID from '../../Components/searchID';
import './PulledComicsProcess.css';

export default function PulledComicsProcess() {

    const[NUM, SETNUM] = useState(0)
    const[INITIAL, SETINITIAL] = useState(false)

    const location = useLocation()

    const PULLEDCOMICS = location.state.PULLEDCOMICS
    const PULLEDCOMICSSETASIDE = location.state.PULLEDCOMICSSETASIDE
   

    const id = location.state.CURRENT_COMICS // PS_NO of this comicsbooks

    const MAIN_DESC = location.state.MAIN_DESC
    const PUBLISHER = location.state.PUBLISHER
    const IMAGE_URL_SMALL = location.state.IMAGE_URL_SMALL

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
            <div className="user-comics-pull">
                <div className="user-comics-panel">
                    <img className="user-comics-cover" src={IMAGE_URL_SMALL}></img>
                    <div className="user-comics-info"> 
                        
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
                 <Link className="confirm-button" to='/PullComics/PullByUser' 
                 onClick={Filter(PULLEDCOMICS, PULLEDCOMICSSETASIDE, id, NUM, searchID(PULLEDCOMICS, id))}>CONFIRM</Link>
            </div>

                <div className="return-button">
                    <Link className="return-button-link" to="/PullComics/PullByUser">Return</Link>
                </div>
            </div>
        </div>
    )
}


function Filter(props, props2, PS_NO, NUM, ORIGINAL_NUM) {

    const [pics, setPics] = useState([]);

    function RemoveADDImage(){

    let iter = ORIGINAL_NUM-NUM;

    if(iter < 0){
        iter = ORIGINAL_NUM
    }

    for(let i=0; i<iter; i++){
        const to_remove = pics.filter((item) => item.PS_NO === PS_NO)[0]
        const index = props.indexOf(to_remove)
        setPics(props.splice(index, 1))
    
        setPics(pics.filter((item) => item.PS_NO !== PS_NO))

        props2.push(pics.filter((item) => item.PS_NO === PS_NO)[0])

        console.log("nowState Size: "+pics.length)
    }
    
  };
  
  useEffect(() => {
    //fake fetch data
    setPics(props);
  }, []);

  return(
        RemoveADDImage()
  )

}