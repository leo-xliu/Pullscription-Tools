import React from "react";
import "./Login.css"

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    render(){
        return(
            <div>
                <h1> this should show the login page </h1>
                <form>
                    <label for="username">Username:</label><br/>
                    <input type="text" name="username"/><br/>
                    <label for="pwd">Password:</label><br/>
                    <input type="password" name="pwd"/><br/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        );
    }
}

export default Login;