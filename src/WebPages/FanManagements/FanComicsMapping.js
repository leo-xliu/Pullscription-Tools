import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import {useState, useEffect} from "react";

export default function FanComicsMapping(props, arg, props2) {

   // var fullFill = []

   // (arg==0) ? fullFill=props2 : []

    const [pics, setPics] = useState([]);

    console.log("props Size: " + props.length)

    const removeImage = (PS_NO) => {
        // this is the line that you are looking for
        setPics((oldState) => oldState.filter((item) => item.PS_NO !== PS_NO));
        
        props = Array.from(pics)
        console.log("nowState Size: "+pics.length)
      };
    
    const addImage = (PS_NO) => {
        // this is the line that you are looking for
        //setPics((oldState) => oldState.filter((item) => item.PS_NO !== PS_NO));
        removeImage(PS_NO)
       // console.log(props2.length)
        props2.push(pics.filter((item) => item.PS_NO === PS_NO)[0])
       // console.log(props2.length)
        //console.log(props2)
      };

      useEffect(() => {
        //fake fetch data
        setPics(props);
      }, []);

//<button onClick={() => removeImage(image.PS_NO)}>X</button>
    var myProps = pics.map(function(image) {
        return (<div className="comic-panel-single">
                    <img  src={image.IMAGE_URL_SMALL} rounded />
                    <h3>{image.MAIN_DESC}</h3>
                    <h6>{image.PUBLISHER}</h6>

                    {(arg==0) ? <button className="FCbutton" onClick={() => addImage(image.PS_NO)}>Complete</button> : <div></div>}
                    {(arg==0) ? <button className="FCbutton" onClick={() => removeImage(image.PS_NO)}>Cancel</button> : <div></div>}
                    
                </div>
        );      
       });

    return(
        
        <div>
            {/* {(arg==0) ? console.log("pics length pulled: ") : ""}
            {(arg==0) ? console.log(myProps.length)  : ""}     
            {(arg==1) ? console.log("pics length fullfiled: ") : ""}
            {(arg==1) ? console.log(myProps.length)  : ""}  */}
            {(arg==1) ? console.log("props Size: " + props.length) : ""}
           {myProps}
        </div>
    )
}