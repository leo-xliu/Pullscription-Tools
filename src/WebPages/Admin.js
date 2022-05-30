import React, { useState, useContext } from 'react';
import Header from "../Components/Header";
import {LoginContext} from '../index';
import './Admin.css'

export default function Admin() {
    const loggedIn = useContext(LoginContext)
    const [addUser, setAddUser] = useState(false)

    return (
        <div>
            <Header loggedIn={loggedIn} user={"User"} />
            <div className="admin-features">
                <div className="add-user">
                    <button onClick={() => {setAddUser(true)}}> Add User</button> 
                    {(addUser === true) ? (        
                        <form >
                        </form>
                ) : ""}
                </div>
                <div className="remove-user">
                    <button> Remove User </button>
                </div>
            </div>
        </div>
    )
}