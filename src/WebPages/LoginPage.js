import React, { useState } from "react";
import "./LoginPage.css";
import LoginForm from '../Components/LoginForm';
import { Link, useNavigate } from "react-router-dom";
import logo from '../Images/PSLOGO.png';


function LoginPage({logged, admin, employ}) {
    let navigate = useNavigate();
    const adminUser = {
        username:"psadmin",
        password: "admin1"
    }

    const [user, setUser] = useState({username: ""});
    const [error, setError] = useState("");
    
    const Login = info => {
        if (info.username === adminUser.username && info.password === adminUser.password){
            setUser({username: info.username});
            logged(true);
            admin(true);
            setError("");
        }
        else if (employ(info) === 0){
            setUser({username: info.username});
            logged(true);
            setError("");
        }
        else if (info.username === adminUser.username || employ(info) === 1){
            setError("Password does not match!");
        }
        else {
            setError("User does not exist!");
        }
    }
    
    return(
        <div> 
            <div className="header"> 
                <Link to="/"><img className="logo" title="return home" src={logo} alt="Pullscription Tools Edition" /></Link>
            </div>
            {(user.username !== "") ? (navigate('/')) :
            (<LoginForm Login={Login} error={error} />)
            }
        </div>
    );
}

export default LoginPage;