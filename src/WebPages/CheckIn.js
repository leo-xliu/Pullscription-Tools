import React, { Component, useContext } from 'react';
import Header from "../Components/Header";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { LoginContext } from '../index';

export default function CheckIn() {
    const loggedIn = useContext(LoginContext)
    return (
        <div>
            <Header loggedIn={loggedIn} /* want this to display user's name */ user={"User"} />
            <h1>CheckIn Page!!</h1>
            <li><Link to="/">Main</Link></li>
        </div>
    )
}
