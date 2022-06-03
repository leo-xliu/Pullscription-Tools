import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useContext} from "react";
import CustomerProfileBase from '../../Components/CustomerProfileBase';
import  Pagination  from '../../Components/PaginationFeature/Pagination'
import Header from '../../Components/Header';
import {LoginContext} from '../../index';
import './FanManagement.css';

export default function FanManagement() {

    const [query, setQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [fanPerPage, setFanPerPage] = useState(16)

    console.log("FanManagment: CustomerProfileBase: "+CustomerProfileBase)
    var base = CustomerProfileBase
    console.log("base: "+base)

    var fanProfile = CustomerProfileBase.filter(data => {
      let fullName = data.firstName + " "+ data.lastName
      if (query === '') {
        return data;
      } else if ((fullName).toLowerCase().includes(query.toLowerCase())) {
        return data;
      }
    }).map((data, index) => (
      <div className="profile-panel-single"key={index}>
        <Link to="/FanManagement/FanProfile"
            state={{
                NAME: data.firstName+" "+data.lastName,
                PULLEDCOMICS: data.pulledComics,
                PULLEDCOMICSSETASIDE : data.pulledComicsSetAside,
                FULLFILLEDCOMICS: data.fulfilledComics,
                NEVERFULLFILLEDCOMICS: data.neverFulfilledComics,
                IMAGE_URL_SMALL: data.IMAGE_URL_SMALL
            }}
        >
            <img className="fan-pic" src={data.IMAGE_URL_SMALL} alt="Logo" />
        </Link>
        <p className="fan-name">{data.firstName} {data.lastName}</p>
      </div>
    ))

    console.log({fanProfile})

    var newProfile = fanProfile
    const indexOfLastFan = currentPage * fanPerPage
    const indexOfFirstFan = indexOfLastFan - fanPerPage
    const currentFan = newProfile.slice(indexOfFirstFan, indexOfLastFan)

    const loggedIn = useContext(LoginContext)

    return (

      <div>
      <Header loggedIn={loggedIn} user={"User"} />
      <div className="fanpage">
        <div className="searchbar">
          <input placeholder="Search Fan Name" onChange={event => setQuery(event.target.value)} />
        </div>
        <div className="pagination">
          <Pagination 
                  currentPage={currentPage}
                  totalSize={fanProfile.length}
                  changeCurrentPage={setCurrentPage}
                  theme="bootstrap"
            />
        </div>
        <div className="profile-panels">
          {fanProfile}
        </div>
        <div className="pagination">
          <Pagination 
                  currentPage={currentPage}
                  totalSize={fanProfile.length}
                  changeCurrentPage={setCurrentPage}
                  theme="bootstrap"
            />
          </div>
          </div>
      </div>
    )
    
}