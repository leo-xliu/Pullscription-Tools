import React, { useContext } from 'react';
import Header from "../Components/Header";
import {LoginContext} from "../index";
import './ProfileSettings.css';

export default function ProfileSettings() {
    const loggedIn = useContext(LoginContext)

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <div>
            <Header loggedIn={loggedIn} user={"User"} />
            <div className="profile-settings-page">
                        <form className="form-page" onSubmit={submitHandler}>  
                            <div className="form-section">
                                <label htmlFor="pwd">Password: </label>
                                <input type="password" name="pwd" id="pwd" 
                                    />
                            </div>
                            <div className="form-section">
                                <label htmlFor="pwd">Confirm Password: </label>
                                <input type="password" name="cpwd" id="cpwd"
                                    />
                            </div>
                            <input type="submit" value="Change Password" />
                            {/* <div >{(addError !== "") ? (<div>{addError}</div>) : ""}
                            </div> */}
                        </form>
                        </div>
        </div>
    )
}