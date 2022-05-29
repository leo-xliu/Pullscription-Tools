import React, { Component } from 'react';
import Header from "../Components/Header";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function Admin() {
    return (
        <div>
            <Header/>
            <h1>Admin Page!!</h1>
            <li><Link to="/">Main</Link></li>
        </div>
    )
}