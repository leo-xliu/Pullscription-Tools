import React from 'react'
import DataBase from './DataBase'

function Data(props){
    return(
        <div>
            <h3 style={{display: props.MAIN_DESC ? "block" : "none"}}>
                MAIN_DESC: {props.MAIN_DESC}
            </h3>
            <h3 style={{display: props.COVER_ARTIST ? "block" : "none"}}>
                COVER_ARTIST: {props.COVER_ARTIST}
            </h3>
            <h3 style={{display: props.DIAMOND_NO ? "block" : "none"}}>
                DIAMOND_NO: {props.DIAMOND_NO}
            </h3>
            <img src={props.IMAGE_URL_SMALL} alt="Logo" />
            <hr/>
        </div>
    )
}

export default Data