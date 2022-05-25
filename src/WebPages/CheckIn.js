import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function CheckIn() {
    return (
        <div>
            <h1>CheckIn Page!!</h1>
            <li><Link to="/">Main</Link></li>
        </div>
    )
}