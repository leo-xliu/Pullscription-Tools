import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function ProfileSettings() {
    return (
        <div>
            <h1>Profile Settings!!</h1>
            <li><Link to="/">Main</Link></li>
        </div>
    )
}