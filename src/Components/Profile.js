import React from 'react'
import ProfileBase from './ProfileBase'

function Profile(props){
    return(
        <div>
            <h3 style={{display: props.Name ? "block" : "none"}}>
                Name: {props.Name}
            </h3>
            <h3 style={{display: props.Marks ? "block" : "none"}}>
                Marks: {props.Marks}
            </h3>
            <h3 style={{display: props.Phone ? "block" : "none"}}>
                Phone: {props.Phone}
            </h3>
            <img src={props.IMAGE_URL_SMALL} alt="Logo" />
            <hr/>
        </div>
    )
}

export default Profile