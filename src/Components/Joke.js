import React from 'react'
import jokesData from './jokesData'

function Joke(props){
    return(
        <div>
            <h3 style={{display: props.Question ? "block" : "none"}}>
                Question: {props.Question}
            </h3>
            <h3 style={{display: props.Answer ? "block" : "none"}}>
                Answer: {props.Answer}
            </h3>
            <hr/>
        </div>
    )
}

export default Joke