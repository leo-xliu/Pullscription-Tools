import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {useState} from "react";
import CustomerProfileBase from '../../Components/CustomerProfileBase';
import  Pagination  from '../../Components/PaginationFeature/Pagination'
import Header from '../../Components/Header';
import PulledComicsProcess from './PulledComicsProcess';

export default function PullByUser(props, arg, props2) {

    const [query, setQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [fanPerPage, setFanPerPage] = useState(10)


    var customerProfile = CustomerProfileBase.filter(data => {
      let fullName = data.firstName + " "+ data.lastName
      if (query === '') {
        return data;
      } else if ((fullName).toLowerCase().includes(query.toLowerCase())) {
        return data;
      }
    }).map((data, index) => (
      <div className="box" key={index}>
        <p>{data.firstName} {data.lastName}</p>
        <Link to="/PullComics/PullByUser/PulledComics"
            state={{
                PULLEDCOMICS: data.pulledComics,
                PULLEDCOMICSSETASIDE: data.pulledComicsSetAside
            }}
        >
            <img src={data.IMAGE_URL_SMALL} alt="Logo" />
        </Link>
      </div>
    ))


    var newProfile = customerProfile
    const indexOfLastFan = currentPage * fanPerPage
    const indexOfFirstFan = indexOfLastFan - fanPerPage
    const currentFan = newProfile.slice(indexOfFirstFan, indexOfLastFan)

    return (
        <div className="box">
          <Header/>
          <h1>Pull By User!!</h1>
          {/* <li><Link to="/PullComics">Pull Comics</Link></li>
          <li><Link to="/">Main</Link></li> */}
        <input placeholder="Enter Comic Title" onChange={event => setQuery(event.target.value)} />
        {
          <div>{customerProfile}</div>
        }
        <Pagination 
                /*comicsPerPage={comicsPerPage}
                totalComics={inventoryComics.length}
                paginate = {paginate}*/
                currentPage={currentPage}
                totalSize={customerProfile.length}
                changeCurrentPage={setCurrentPage}
                theme="bootstrap"
          />
    </div>
    )
}


// CustomerProfileBase.filter(data => {
//   let fullName = data.firstName + " "+ data.lastName
//   if (query === '') {
//     return data;
//   } else if ((fullName).toLowerCase().includes(query.toLowerCase())) {
//     return data;
//   }
// }).map((data, index) => (
//   <div className="box" key={index}>
//     <p>{data.firstName} {data.lastName}</p>
//     {/*<p>{data.WRITER}</p>*/}
//         {/* <BrowserRouter>
//             <Routes>
//                 <Route path="/Inventory/ComicProfile" element={<ComicProfile props={data}/>} />
//             </Routes>
//         </BrowserRouter> */}
//     <Link to="/PullComics/PullByUser/PulledComics"
//         state={{
//             PULLEDCOMICS: data.pulledComics
//         }}
//     >
//         <img src={data.IMAGE_URL_SMALL} alt="Logo" />
//     </Link>
//   </div>
// ))