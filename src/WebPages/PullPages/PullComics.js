
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';

export default function PullComics() {
    return (
        <div>
            <Header/>
            <li><Link to="/PullComics/PullByWeek">Pull_By_Week</Link></li>
            <li><Link to="/PullComics/PullByUser">Pull_By_User</Link></li>
            <li><Link to="/">Main</Link></li>
        </div>
    )
}