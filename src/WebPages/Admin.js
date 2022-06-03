import React, { useState, useContext } from 'react';
import Header from "../Components/Header";
import {LoginContext} from '../index';
import './Admin.css';
import axios from 'axios';

export default function Admin({adduser, remuser}) {
    const loggedIn = useContext(LoginContext);
    const [addUser, setAddUser] = useState(false);
    const [remUser, setRemUser] = useState(false);
    const [createMessage, setCreateMessage] = useState("");
    const [createMessage2, setCreateMessage2] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        setCreateMessage("User Created!");
        
    }

    const submitHandler2 = e => {
        e.preventDefault();
        setCreateMessage2("User Removed!");
        
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(0);

    const addAdmin = () => {
        axios.post('http://localhost:3001/create', {
            username: username,
            password: password
        }).then (()=>{
            setAdmin([...admin, {
                username: username,
                password: password
            }]);
        });
    };

    const deleteAdmin = (id) => {
        axios.delete(`http://localhost:3001/delete:${id}`).then ((res)=>{
        })
    };

    return (
        <div>
            <Header loggedIn={loggedIn} user={"User"} />
            <div className="admin-page">

                <div className="add-user">
                    <div className="adminbuttons">
                    <button onClick={() => {if(addUser === false) {setAddUser(true)} else {setAddUser(false)};}}> Create User</button> 
                    </div>
                    {(addUser === true) ? (  
                        <div className="add-user-form">
                        <form className="form-page" onSubmit={submitHandler}>  
                            <div className="form-section">
                                <label htmlFor="username">Username: </label>
                                <input type="text" name="username" id="username" 
                                    onChange={e=>{
                                        setUsername(e.target.value);
                                    }}
                                    />
                            </div>
                            <div className="form-section">
                                <label htmlFor="pwd">Password: </label>
                                <input type="password" name="pwd" id="pwd"
                                    onChange={e=>{
                                        setPassword(e.target.value);
                                    }}/>
                            </div>
                            <input onClick={addAdmin} type="submit" value="Create User" />
                            <div className="create-message"> {createMessage}</div>
                        </form>
                        </div>
                ) : ""}
                </div>



                <div className="remove-user">
                    <div className="adminbuttons">
                    <button onClick={() => {if(remUser === false) {setRemUser(true)} else {setRemUser(false)};}}> Remove User </button>
                    </div>
                    {(remUser === true) ? (     
                        <div className="add-user-form">  
                        <form className="form-page" onSubmit={submitHandler2}>
                        <div className="form-section">
                                <label htmlFor="username">Username: </label>
                                <input type="text" name="username" id="username" 
                                    onChange={(e)=>{
                                        setUsername(e.target.value);
                                    }}
                                    />
                            </div>
                            <input onClick={deleteAdmin(username)} type="submit" value="Remove User" />
                            <div className="create-message"> {createMessage2}</div>
                        </form>
                        </div>
                ) : ""}
                </div>
            </div>
        </div>
    )
}