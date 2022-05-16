
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function PullComics() {
    return (
        <div>
            <h1>Pull Comics!!</h1>
            <li><Link to="/PullComics/PullByWeek">Pull_By_Week</Link></li>
            <li><Link to="/PullComics/PullByUser">Pull_By_User</Link></li>
            <li><Link to="/">Main</Link></li>
        </div>
    )
}