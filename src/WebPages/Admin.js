import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function Admin() {
    return (
        <div>
            <h1>Admin Page!!</h1>
            <li><Link to="/">Main</Link></li>
        </div>
    )
}