import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import {useState, useEffect} from "react";
import CustomerProfileBase from '../../Components/CustomerProfileBase';
import FanComicsMapping from './FanComicsMapping';
import getUnique from '../../Components/getUnique';

export default function FanProfile() {

    const location = useLocation()
    const NAME = location.state.NAME
    console.log(NAME)
    //console.log(location.state.MAIN_DESC)
    const PULLEDCOMICS = location.state.PULLEDCOMICS
    const PULLEDCOMICSSETASIDE = location.state.PULLEDCOMICSSETASIDE
    const FULLFILLEDCOMICS = location.state.FULLFILLEDCOMICS
    const NEVERFULLFILLEDCOMICS = location.state.NEVERFULLFILLEDCOMICS

    //var dynamicPULLEDCOMICS = PULLEDCOMICS

    var renderPULLEDCOMICS = getUnique(PULLEDCOMICS, "PS_NO")
    var renderPULLEDCOMICSSETASIDE = getUnique(PULLEDCOMICSSETASIDE, "PS_NO")
    var renderFULLFILLEDCOMICS = getUnique(FULLFILLEDCOMICS, "PS_NO")
    var renderNEVERFULLFILLEDCOMICS = getUnique(NEVERFULLFILLEDCOMICS, "PS_NO")

    var displayPCI = FanComicsMapping(PULLEDCOMICSSETASIDE, 0, FULLFILLEDCOMICS)

    //var displayPCSAI = FanComicsMapping(PULLEDCOMICSSETASIDE)

    var displayFFCI = FanComicsMapping(FULLFILLEDCOMICS, 1, FULLFILLEDCOMICS)

    //var diaplayNFFCI = FanComicsMapping(NEVERFULLFILLEDCOMICS)

    console.log("renderPulledComicsSetAside Length: ")
    console.log(renderPULLEDCOMICSSETASIDE.length)
    console.log("renderFullFilledComics Length: ")
    console.log(renderFULLFILLEDCOMICS.length)

    // var pulledComicsIMG = PULLEDCOMICS.map(function(image) {
    //     return (<div>
    //                 <img src={image.IMAGE_URL_SMALL} rounded />
    //                 <div>{image.PUBLISHER}</div>
    //                 <div>{image.MAIN_DESC}</div>
    //             </div>
    //     );      
    //    });

    // var pulledComicsSetAside = PULLEDCOMICSSETASIDE.map(function(image) {
    //     return (
    //             <img src={image.IMAGE_URL_SMALL} rounded />
    //     );
    //    });

    // var fullfilledComicsIMG = FULLFILLEDCOMICS.map(function(image) {
    //     return (
    //             <img src={image.IMAGE_URL_SMALL} rounded />
    //     );
    //    });
    
    // var neverfullfilledComicsIMG = NEVERFULLFILLEDCOMICS.map(function(image) {
    //     return (
    //             <img src={image.IMAGE_URL_SMALL} rounded />
    //     );
    //    });

    // var displayPCI =    <div>
    //                         <h3 style={{display: pulledComicsIMG ? "block" : "none"}}>
    //                             pulledComicsIMG: {pulledComicsIMG}
    //                         </h3>
    //                         <h6>{PULLEDCOMICS.MAIN_DESC}</h6>
    //                     </div>
    
    // var displayPCSAI = <h3 style={{display: pulledComicsSetAside ? "block" : "none"}}>
    //                     pulledComicsIMG: {pulledComicsSetAside}
    //                 </h3>

    // var displayFFCI =   <div>
    //                         <h3 style={{display: fullfilledComicsIMG ? "block" : "none"}}>
    //                             fullfilledComicsIMG: {fullfilledComicsIMG}
    //                         </h3>
    //                         <h6>{PULLEDCOMICS.MAIN_DESC}</h6>
    //                     </div>

    // var displayNFFCI = <h3 style={{display: neverfullfilledComicsIMG ? "block" : "none"}}>
    //                     neverfullfilledComicsIMG: {neverfullfilledComicsIMG}
    //                 </h3>

    var totalComics = (PULLEDCOMICS.length + PULLEDCOMICSSETASIDE.length + FULLFILLEDCOMICS.length + NEVERFULLFILLEDCOMICS.length)
    var purchaseRatio = ((totalComics - NEVERFULLFILLEDCOMICS.length) / totalComics)*100 // length of (fullfilledComics / neverfullfilledComics)

    const [Pulled, setPulled] = useState(false)
    const [Fullfilled, setFullfilled] = useState(false)
    const [Sort, setSort] = useState(false)
    const [Removed, setRemoved] = useState(false)
    const [markFullFilled, setMarkFullFilled] = useState(false)
    //const [totalComics, setTotalComics] = useState(0)
    //const [purchaseRatio, setPurchaseRatio] = useState(0)

    //setTotalComics(PULLEDCOMICS.length + PULLEDCOMICSSETASIDE.length + FULLFILLEDCOMICS.length + NEVERFULLFILLEDCOMICS.length)
  //  setPurchaseRatio(((totalComics - NEVERFULLFILLEDCOMICS.length) / totalComics)*100)
    //const [dynamicPULLEDCOMICS, setdynamicPULLEDCOMICS] = useState(PULLEDCOMICS)

    //setdynamicPULLEDCOMICS()

    var sortingData=[]

    function Sorting() {
        if(Pulled){
            sortingData = PULLEDCOMICS
        }
        if(Fullfilled){
            sortingData = FULLFILLEDCOMICS
        }
    }
    
    function pulledClick() {
        setPulled(!Pulled)
        setFullfilled(false)
    }
    //const pulledClick = () => setPulled(!Pulled)

    function fullfilledClick() {
        setFullfilled(!Fullfilled)
        setPulled(false)
    }

    // function removedClick() {
    //     setRemoved(!Removed)
    //     setMarkFullFilled(false)
    // }

    // function markFullFilledClick() {
    //     setMarkFullFilled(!markFullFilled)
    //     setRemoved(false)
    // }
    //const fullfilledClick = () => setFullfilled(!Fullfilled)

    const sortClick = () => setSort(!Sort)
    
/*
    const [pics, setPics] = useState([]);

    const removeImage = (PS_NO) => {
        // this is the line that you are looking for
        setPics((oldState) => oldState.filter((item) => item.PS_NO !== PS_NO));
      };
    
      useEffect(() => {
        //fake fetch data
        setPics(PULLEDCOMICS);
      }, []);


    function removedFunction(){
        return (
            <div className="App">
              {pics.map((pic) => {
                return (
                  <div style={{ marginBottom: "100px" }}>
                    {pic.id}
                    <img
                      src={pic.imgUrl}
                      width="100px"
                      height="100px"
                      alt="placeholder grey 100px"
                    />
                    <button onClick={() => removeImage(pic.id)}>X</button>
                  </div>
                );
              })}
            </div>
          );
    }
*/

    // function removedFunction(){

    // }

    // function markFullFilledFunction(){

    // }


   /*
    const list = [
        { qty: 10, size: 'XXL' },
        { qty: 2, size: 'XL' },
        { qty: 8, size: 'M' }
      ]
      
      list.sort((a, b) => (a.qty > b.qty) ? 1 : -1)
      
      console.log(list)
    */
   //console.log("FullFilledLength: ")
    //console.log(FULLFILLEDCOMICS.length)
    return(
        
        <div>      
            
            {/* <button onClick={sortClick}>Sort</button>
                {Sorting}
                {sortingData.sort((a,b) => (a.MAIN_DESC > b.MAIN_DESC) ? 1 : -1)} */}
                
            <h3 style={{display: NAME ? "block" : "none"}}>
                {NAME}
            </h3>

            <h5>Pulls to Date: {(totalComics - NEVERFULLFILLEDCOMICS.length)}</h5>

            <h5>Pull / Purchase Ratio: {parseFloat(purchaseRatio).toFixed(2)}%</h5>

            <button Name="PButton" onClick={pulledClick}>Pulled</button>
            {(Pulled) ? <div>{displayPCI}</div> : <div></div>}

            {/* {(Pulled) ? <div><button onClick={removedClick}>Cancel User Pull</button></div> : <div></div>}
                {(Removed)? <div>Removed{removedFunction}</div> : <div></div>}
            {(Pulled) ? <div><button onClick={markFullFilledClick}>Mark as Fullfilled</button></div> : <div></div>}
                {(markFullFilled)? <div>{markFullFilledFunction}</div> : <div></div>} */}

            <button Name="FFButton" onClick={fullfilledClick}>Fullfilled</button>
            {(Fullfilled) ? <div>{displayFFCI}</div> : <div></div>}

            <li><Link to="/FanManagement">BACK</Link></li>

            <hr/>

        </div>
    )
}

