import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function Inventory() {
    return (
        <div>
            <h1>Inventory!!</h1>
            <li><Link to="/">Main</Link></li>
        </div>
    )
}