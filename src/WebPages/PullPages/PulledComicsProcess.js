
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
    const [pics, setPics] = useState([]);

    const location = useLocation()

    const FIRSTNAME = location.state.FIRSTNAME
    const LASTNAME = location.state.LASTNAME

    const PULLEDCOMICS = location.state.PULLEDCOMICS
    const PULLEDCOMICSSETASIDE = location.state.PULLEDCOMICSSETASIDE
   // const NUMS = searchID(PULLEDCOMICS, id)

    const id = location.state.CURRENT_COMICS // PS_NO of this comicsbooks

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

    function Filter(props, props2, PS_NO, NUM, ORIGINAL_NUM) {

        const [pics, setPics] = useState([]);

        function removeImage(){
        // this is the line that you are looking for
        //setPics((oldState) => oldState.filter((item) => item.PS_NO !== PS_NO));

         const to_remove = pics.filter((item) => item.PS_NO === PS_NO)[0]
         const index = props.indexOf(to_remove)
         setPics(props.splice(index, 1))
         //document.getElementsByName("PButton")[0].click()

        //document.getElementsByName("PButton")[0].click()
        //myProps.splice(index, 1)
        
        setPics(pics.filter((item) => item.PS_NO !== PS_NO))
        
        //props = Array.from(pics)
        console.log("nowState Size: "+pics.length)
        
      };
    
        function addImage(){
        // this is the line that you are looking for
        //setPics((oldState) => oldState.filter((item) => item.PS_NO !== PS_NO));
       // console.log(props2.length)
        props2.push(pics.filter((item) => item.PS_NO === PS_NO)[0])
        //console.log(props2)
        removeImage(PS_NO, NUM, ORIGINAL_NUM)
        console.log("props: ")
        console.log(props)
       // console.log(props2.length)
        console.log("props2: ")
        console.log(props2)
      };

      useEffect(() => {
        //fake fetch data
        setPics(props);
      }, []);

      function Caller(){
          if((NUM+ORIGINAL_NUM) == 0 ){
              addImage()
          }
          else if(NUM<ORIGINAL_NUM){
              removeImage()
          }
      }

      return(
            Caller()
      )

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
                <h4>{searchID(PULLEDCOMICS, id)+NUM} {((searchID(PULLEDCOMICS, id)+NUM)>1)?"Copies":"Copy"}</h4>
                {console.log("PULLECOMICS")}
                {console.log(PULLEDCOMICS)}
                {/* {Filter(PULLEDCOMICS, PULLEDCOMICSSETASIDE, id, NUM, searchID(PULLEDCOMICS,id))} */}
                {console.log(searchID(PULLEDCOMICS, id))}
                {/* <div style={{color: "yellow"}}>Copies Now:{{NUM_ID}+{NUM}})</div> */}
            </div>
            <div>
                <Link to='/PullComics/PullByUser'>Confirm</Link>
                <button>Download</button>
            </div>
            {/* <li><Link to="/PullComics/PullByWeek">Pull_By_Week</Link></li>
            <li><Link to="/PullComics/PullByUser">Pull_By_User</Link></li>
            <li><Link to="/">Main</Link></li> */}
        </div>
    )
}
