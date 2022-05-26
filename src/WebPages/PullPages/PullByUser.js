import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {useState} from "react";
import CustomerProfileBase from '../../Components/CustomerProfileBase';

export default function PullByUser() {

    const [query, setQuery] = useState("")

    return (
        <div className="box">
          <h1>Pull By User!!</h1>
          {/* <li><Link to="/PullComics">Pull Comics</Link></li>
          <li><Link to="/">Main</Link></li> */}
        <input placeholder="Enter Comic Title" onChange={event => setQuery(event.target.value)} />
        {
          //{dataComponents}  
            CustomerProfileBase.filter(data => {
              let fullName = data.firstName + " "+ data.lastName
              if (query === '') {
                return data;
              } else if ((fullName).toLowerCase().includes(query.toLowerCase())) {
                return data;
              }
            }).map((data, index) => (
              <div className="box" key={index}>
                <p>{data.firstName} {data.lastName}</p>
                {/*<p>{data.WRITER}</p>*/}
                    {/* <BrowserRouter>
                        <Routes>
                            <Route path="/Inventory/ComicProfile" element={<ComicProfile props={data}/>} />
                        </Routes>
                    </BrowserRouter> */}
                <Link to="/PullComics/PullByUser/PulledComics"
                    state={{
                        PULLEDCOMICS: data.pulledComics
                    }}
                >
                    <img src={data.IMAGE_URL_SMALL} alt="Logo" />
                </Link>
              </div>
            ))
        }
    </div>
    )
}

