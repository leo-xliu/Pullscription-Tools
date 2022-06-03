import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({Login, error}) {
    const [info, setInfo] = useState({username: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(admin);
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(0);

    const login = () => {
        axios.post('http://localhost:3001/admin', {
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
    <div className="loginform"> 
        <form className="form-page" onSubmit={submitHandler}>
                    <h1 classname="welcome"> Welcome </h1>   
                    <div className="form-section">
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" id="username" 
                            //onChange={e => setInfo({...info, username: e.target.value})} value={info.username} 
                            onChange={(e)=>{
                                setUsername(e.target.value);
                            }}
                            />
                    </div>
                    <div className="form-section">
                        <label htmlFor="pwd">Password: </label>
                        <input type="password" name="pwd" id="pwd"
                            //onChange={e => setInfo({...info, password: e.target.value})} value={info.password} 
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                            />
                    </div>
                    <div className="errorMessage">{(error !== "") ? (<div>{error}</div>) : ""}
                        </div>
                    <input onClick={login} type="submit" value="Login" />
        </form>
    </div>
    )
}

export default LoginForm;