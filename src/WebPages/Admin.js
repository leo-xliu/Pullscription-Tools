import React, { useState, useContext } from 'react';
import Header from "../Components/Header";
import {LoginContext} from '../index';
import './Admin.css';
import axios from 'axios';

export default function Admin({adduser, remuser}) {
    const loggedIn = useContext(LoginContext);
    const [addUser, setAddUser] = useState(false);
    const [remUser, setRemUser] = useState(false);

    const [addinfo, setaddInfo] = useState({username: "", password: ""});
    const [reminfo, setremInfo] = useState({username: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        // adduser(addinfo);
    //    if (success === 1){
    //        setAddError("User already exists!");
    //    }
    //    else if (success === 2){
    //        setAddError("Password needs to be at least 6 characters!");
    //    }
    //    else {
    //         setAddError("");
    //    }
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
                                    //onChange={e => setaddInfo({...addinfo, username: e.target.value})} value={addinfo.username}
                                    onChange={e=>{
                                        setUsername(e.target.value);
                                    }}
                                    />
                            </div>
                            <div className="form-section">
                                <label htmlFor="pwd">Password: </label>
                                <input type="password" name="pwd" id="pwd"
                                    //onChange={e => setaddInfo({...addinfo, password: e.target.value})} value={addinfo.password}
                                    onChange={e=>{
                                        setPassword(e.target.value);
                                    }}/>
                            </div>
                            <input onClick={addAdmin} type="submit" value="Create User" />
                            {/* <div >{(addError !== "") ? (<div>{addError}</div>) : ""}
                            </div> */}
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
                        <form className="form-page" onSubmit={submitHandler}>
                        <div className="form-section">
                                <label htmlFor="username">Username: </label>
                                <input type="text" name="username" id="username" 
                                    onChange={e => setremInfo({...reminfo, username: e.target.value})} value={reminfo.username}/>
                            </div>
                            <input type="submit" value="Remove User" />
                        </form>
                        </div>
                ) : ""}
                </div>
            </div>
        </div>
    )
}