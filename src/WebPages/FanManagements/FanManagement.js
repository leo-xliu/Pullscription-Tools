import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ProfileBase from '../../Components/ProfileBase';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import CustomerProfileBase from '../../Components/CustomerProfileBase';

/*
function RenderTable()
{
    const tableRows=ProfileBase.map(
        (element)=>{
            return( 
                
              <tr>
                <Link to="/FanManagement/FanProfile" 
                  state={{
                    NAME: element.Name,
                    MARKS: element.Marks,
                    PHONE: element.Phone,
                }}
                >
                  <td>{element.Name}</td>
                </Link>
                <td>{element.Marks}</td>
                <td>{element.Phone}</td>
              </tr>
                
            )
        }
    )

    return(
        <div>
            
          <Table hover>
              <thead>
                <tr>    
                  <th>Name</th>
                  <th>Marks</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {tableRows}
              </tbody>
            </Table>      
              
        </div>
    )
}
*/

export default function FanManagement() {

    const [query, setQuery] = useState("")

    return (
      // <div>
      //   <h1 style={{ color: 'green' }}>Fan Management!!</h1>
      //   <li><Link to="/">Main</Link></li>
      //   <br></br>
      //   <RenderTable />
      // </div>

      <div className="box">

      <h1>FanManagement!!</h1>

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
            <Link to="/FanManagement/FanProfile"
                state={{
                    NAME: data.firstName+" "+data.lastName,
                    PULLEDCOMICS: data.pulledComics,
                    PULLEDCOMICSSETASIDE : data.pulledComicsSetAside,
                    FULLFILLEDCOMICS: data.fulfilledComics,
                    NEVERFULLFILLEDCOMICS: data.neverFulfilledComics
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