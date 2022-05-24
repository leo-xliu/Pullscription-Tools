import React, { useState } from 'react';

function LoginForm({Login, error}) {
    const [info, setInfo] = useState({username: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(info);
    }

    return (
    <div className="loginform"> 
        <form onSubmit={submitHandler}>
                    <h1 classname="welcome"> Welcome </h1>   
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
                    <div className="errorMessage">{(error !== "") ? (<div>{error}</div>) : ""}
                        </div>
                    <input type="submit" value="Login" />
        </form>
    </div>
    )
}

export default LoginForm;