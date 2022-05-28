import React, { useState } from "react";
import "./LoginPage.css";
import LoginForm from '../Components/LoginForm';
import { Link, useNavigate } from "react-router-dom";
import logo from '../Images/PSLOGO.png';


function LoginPage() {
    let navigate = useNavigate();
    const adminUser = {
        username:"psadmin",
        password: "admin1"
    }

    const employees = new Map();
    employees.set("psemploy", "employ1");

    const [user, setUser] = useState({username: ""});
    const [error, setError] = useState("");
    
    const Login = info => {
        console.log(info);
        if (info.username === adminUser.username && info.password === adminUser.password){
            setUser({username: info.username});
            setError("");
        }
        else if (employees.get(info.username) === info.password){
            setUser({username: info.username});
            setError("");
        }
        else if (info.username === adminUser.username || employees.get(info.username) !== undefined){
            setError("Password does not match!");
        }
        else {
            setError("User does not exist!");
        }
    }

    // const Logout = () => {
    // }
    
    return(
        <div classname="app"> 
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