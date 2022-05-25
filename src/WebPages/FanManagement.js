import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ProfileBase from '../components/ProfileBase';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function RenderTable()
{
    const tableRows=ProfileBase.map(
        (element)=>{
            return( 
                
              <tr>
                <td>{element.Name}</td>
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
                  <th> Name</th>
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
export default function FanManagement() {

    return (
      <div>
        <h1 style={{ color: 'green' }}>Fan Management!!</h1>
        <li><Link to="/">Main</Link></li>
        <br></br>
        <RenderTable />
      </div>
    )
    
}