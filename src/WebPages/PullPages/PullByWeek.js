import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function PullByWeek() {
    return (
        <div>
            <h1>Pull By Week!!</h1>
            <li><Link to="/PullComics">Pull Comics</Link></li>
            <li><Link to="/">Main</Link></li>
        </div>
    )
}