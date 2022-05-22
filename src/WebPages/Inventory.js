import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Data from '../Components/Data';
import DataBase from '../Components/DataBase';
import jokesData from '../Components/jokesData';
import Joke from '../Components/Joke';
import {useState} from "react";

export default function Inventory() {

    /*
    const jokesComponents = jokesData.map((joke)=>{
        return <Joke key={joke.id} Question={joke.Question} Answer={joke.Answer}/>
      })
    */

    const dataComponents = DataBase.map((data)=>{
        return <Data key={data.PS_NO} DIAMOND_NO={data.DIAMOND_NO} LUNAR_NO={data.LUNAR_NO} PRH_NO={data.PRH_NO}
        MAIN_DESC={data.MAIN_DESC} PAGE_COUNT={data.PAGE_COUNT} WRITER={data.WRITER} ARTIST={data.ARTIST}
        COVER_ARTIST={data.COVER_ARTIST} STREET_DATE={data.STREET_DATE} FOC_DATE={data.FOC_DATE} MSRP={data.MSRP}
        DISCOUNT_CODE={data.DISCOUNT_CODE} SERIES_CODE={data.SERIES_CODE} ISSUE_NO={data.ISSUE_NO} COVER_NUMBER={data.COVER_NUMBER}
        MAX_ISSUE={data.MAX_ISSUE} PUBLISHER={data.PUBLISHER} CATEGORY={data.CATEGORY} MATURE={data.MATURE} ADULT={data.ADULT}
        ORDER_FORM_NOTES={data.ORDER_FORM_NOTES} PREVIEWS_PAGE={data.PREVIEWS_PAGE} UPC_NO={data.UPC_NO} EAN_NO={data.EAN_NO}
        PRODUCT_COPY={data.PRODUCT_COPY} PULL_COUNT={data.PULL_COUNT} SUB_COUNT={data.SUB_COUNT} TEST_PRODUCT={data.TEST_PRODUCT}
        DATE_ADDED={data.DATE_ADDED} VARIANT={data.VARIANT} VARIANT_RATIO={data.VARIANT_RATIO} LIMITED_VARIANT={data.LIMITED_VARIANT}
        VARIANT_NOTES={data.VARIANT_NOTES} NUMBER_OF_COVERS={data.NUMBER_OF_COVERS} FCBD={data.FCBD} HC={data.HC} TP={data.TP} 
        GN={data.GN} DISPLAY_TITLE={data.DISPLAY_TITLE} IMAGE_URL_SMALL={data.IMAGE_URL_SMALL} IMAGE_URL_SMALL_2x={data.IMAGE_URL_SMALL_2x}
        IMAGE_URL_SMALL_3x={data.IMAGE_URL_SMALL_3x} IMAGE_URL_MEDIUM={data.IMAGE_URL_MEDIUM} IMAGE_URL_MEDIUM_2x={data.IMAGE_URL_MEDIUM_2x}
        IMAGE_URL_MEDIUM_3x={data.IMAGE_URL_MEDIUM_3x} IMAGE_URL_ORIGINAL={data.IMAGE_URL_ORIGINAL}
        />
    })
    
    const [query, setQuery] = useState("")

    return (
        <div className="box">
            <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
            {
              //{dataComponents}  

                DataBase.filter(data => {
                  if (query === '') {
                    return data;
                  } else if (data.MAIN_DESC.toLowerCase().includes(query.toLowerCase())) {
                    return data;
                  }
                }).map((data, index) => (
                  <div className="box" key={index}>
                    <p>{data.MAIN_DESC}</p>
                    <img src={data.IMAGE_URL_SMALL} alt="Logo" />
                  </div>
                ))
            }
        </div>
        
    )
    /*return (
        <div>
            <h1>Inventory!!</h1>
            <li><Link to="/">Main</Link></li>
            
        </div>
    )*/
}
