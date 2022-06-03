import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {useState} from "react";
import CustomerProfileBase from '../../Components/CustomerProfileBase';
import Header from '../../Components/Header';
import {LoginContext} from '../../index';
import  Pagination  from '../../Components/PaginationFeature/Pagination'

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
      <div className="profile-panel-single" key={index}>
        <Link to="/PullComics/PullByUser/PulledComics"
            state={{
                FIRSTNAME: data.firstName,
                LASTNAME: data.lastName,
                PULLEDCOMICS: data.pulledComics,
                PULLEDCOMICSSETASIDE: data.pulledComicsSetAside
            }}
        >
            <img className="fan-pic" src={data.IMAGE_URL_SMALL} alt="Logo" />
            {console.log("PULLBYUSER: firstname: lastname: "+data.firstName+" "+data.lastName)}
        </Link>
        <p className="fan-name">{data.firstName} {data.lastName}</p>
      </div>
    ))


    var newProfile = customerProfile
    const indexOfLastFan = currentPage * fanPerPage
    const indexOfFirstFan = indexOfLastFan - fanPerPage
    const currentFan = newProfile.slice(indexOfFirstFan, indexOfLastFan)

    const loggedIn = useContext(LoginContext)

    return (
        <div>
          <Header loggedIn={loggedIn} user={"User"} />
          <div className="inventory">
          <div className="searchbar">
            <input placeholder="Search Fan Name" onChange={event => setQuery(event.target.value)} />
          </div>
          <div className="pagination">
        <Pagination 
                currentPage={currentPage}
                totalSize={customerProfile.length}
                changeCurrentPage={setCurrentPage}
                theme="bootstrap"
          />
          </div>
        <div className="profile-panels">
          {customerProfile}
        </div>
        <div className="pagination">
        <Pagination 
                currentPage={currentPage}
                totalSize={customerProfile.length}
                changeCurrentPage={setCurrentPage}
                theme="bootstrap"
          />
          </div>
    </div>
    </div>
    )}
