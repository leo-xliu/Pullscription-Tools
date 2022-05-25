import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from "../Components/Header";


export default function ProfileSettings() {
    return (
        <div>
            <Header/>
            <h1>Profile Settings!!</h1>
            <li><Link to="/">Main</Link></li>
        </div>
    )
}