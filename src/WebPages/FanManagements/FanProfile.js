import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import {useState} from "react";
import CustomerProfileBase from '../../Components/CustomerProfileBase';

export default function FanProfile() {

    const location = useLocation()
    const NAME = location.state.NAME
    console.log(NAME)
    //console.log(location.state.MAIN_DESC)
    const PULLEDCOMICS = location.state.PULLEDCOMICS
    const PULLEDCOMICSSETASIDE = location.state.PULLEDCOMICSSETASIDE
    const FULLFILLEDCOMICS = location.state.FULLFILLEDCOMICS
    const NEVERFULLFILLEDCOMICS = location.state.NEVERFULLFILLEDCOMICS

    var pulledComicsIMG = PULLEDCOMICS.map(function(image) {
        return (<img src={image.IMAGE_URL_SMALL} rounded />);
       });

    var pulledComicsSetAside = PULLEDCOMICSSETASIDE.map(function(image) {
        return (<img src={image.IMAGE_URL_SMALL} rounded />);
       });

    var fullfilledComicsIMG = FULLFILLEDCOMICS.map(function(image) {
        return (<img src={image.IMAGE_URL_SMALL} rounded />);
       });
    
    var neverfullfilledComicsIMG = NEVERFULLFILLEDCOMICS.map(function(image) {
        return (<img src={image.IMAGE_URL_SMALL} rounded />);
       });

    var displayPCI =    <div>
                            <h3 style={{display: pulledComicsIMG ? "block" : "none"}}>
                                pulledComicsIMG: {pulledComicsIMG}
                            </h3>
                        </div>
    
    var displayPCSAI = <h3 style={{display: pulledComicsSetAside ? "block" : "none"}}>
                        pulledComicsIMG: {pulledComicsSetAside}
                    </h3>

    var displayFFCI =   <div>
                            <h3 style={{display: fullfilledComicsIMG ? "block" : "none"}}>
                                fullfilledComicsIMG: {fullfilledComicsIMG}
                            </h3>
                        </div>

    var displayNFFCI = <h3 style={{display: neverfullfilledComicsIMG ? "block" : "none"}}>
                        neverfullfilledComicsIMG: {neverfullfilledComicsIMG}
                    </h3>

    var totalComics = (PULLEDCOMICS.length + PULLEDCOMICSSETASIDE.length + FULLFILLEDCOMICS.length + neverfullfilledComicsIMG.length)
    var purchaseRatio = ((totalComics - neverfullfilledComicsIMG.length) / totalComics)*100 // length of (fullfilledComics / neverfullfilledComics)

    const [Pulled, setPulled] = useState(false)
    const [Fullfilled, setFullfilled] = useState(false)
    const [Sort, setSort] = useState(false)

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

    //const fullfilledClick = () => setFullfilled(!Fullfilled)

    const sortClick = () => setSort(!Sort)

   /*
    const list = [
        { qty: 10, size: 'XXL' },
        { qty: 2, size: 'XL' },
        { qty: 8, size: 'M' }
      ]
      
      list.sort((a, b) => (a.qty > b.qty) ? 1 : -1)
      
      console.log(list)
    */

    

    return(
        
        <div>      
            
            <button onClick={sortClick}>Sort</button>
                {Sorting}
                {sortingData.sort((a,b) => (a.MAIN_DESC > b.MAIN_DESC) ? 1 : -1)}
                
            <h3 style={{display: NAME ? "block" : "none"}}>
                {NAME}
            </h3>

            <h5>Pull / Purchase Ratio: {purchaseRatio}%</h5>

            <button onClick={pulledClick}>Pulled</button>
            {(Pulled) ? <div>{displayPCI}</div> : <div></div>}
            {(Pulled) ? <div><button>Cancel User Pull</button></div> : <div></div>}
            {(Pulled) ? <div><button>Mark as Fullfilled</button></div> : <div></div>}

            <button onClick={fullfilledClick}>Fullfilled</button>
            {(Fullfilled) ? <div>{displayFFCI}</div> : <div></div>}

            <li><Link to="/FanManagement">BACK</Link></li>

            <hr/>

        </div>
    )
}

