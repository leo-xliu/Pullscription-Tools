import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({Login, error}) {
    const [info, setInfo] = useState({username: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(info);
    }

    return (
    <div className="form-box">
        <form onSubmit={submitHandler}>
            <div >
                <h1> Welcome </h1>
                <h3> Please Sign In </h3>
                {(error !== "") ? (<div>{error}</div>) : ""}  
                <div className="form-section">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" 
                        onChange={e => setInfo({...info, username: e.target.value})} value={info.username} />
                </div>
                <div className="form-section">
                    <label htmlFor="pwd">Password: </label>
                    <input type="password" name="pwd" id="pwd"
                        onChange={e => setInfo({...info, password: e.target.value})} value={info.password} />
                </div>
                <input type="submit" value="Login" />
            </div>
        </form>
    </div>
    )
}

export default LoginForm;