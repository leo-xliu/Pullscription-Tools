import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function FanManagement() {
    return (
        <div>
            <h1>Fan Management!!</h1>
            <li><Link to="/">Main</Link></li>
        </div>
    )
}