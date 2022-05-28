import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import {useState, useEffect} from "react";

export default function FanComicsMapping(props, arg, props2) {

   // var fullFill = []

   // (arg==0) ? fullFill=props2 : []

    const [pics, setPics] = useState([]);

    const removeImage = (PS_NO) => {
        // this is the line that you are looking for
        setPics((oldState) => oldState.filter((item) => item.PS_NO !== PS_NO));
      };
    
    const addImage = (PS_NO) => {
        // this is the line that you are looking for
        setPics((oldState) => oldState.filter((item) => item.PS_NO !== PS_NO));
        props2.push(pics.filter((item) => item.PS_NO === PS_NO))
      };
      useEffect(() => {
        //fake fetch data
        setPics(props);
      }, []);
//<button onClick={() => removeImage(image.PS_NO)}>X</button>
    var myProps = pics.map(function(image) {
        return (<div>
                    <img  src={image.IMAGE_URL_SMALL} rounded />
                    <h6>{image.PUBLISHER}</h6>
                    <h3>{image.MAIN_DESC}</h3>
                    {(arg==0) ? <button onClick={() => removeImage(image.PS_NO)}>X</button> : <div></div>}
                    {(arg==0) ? <button onClick={() => addImage(image.PS_NO)}>O</button> : <div></div>}
                </div>
        );      
       });

    return(
        
        <div>         
           {myProps}
        </div>
    )
}