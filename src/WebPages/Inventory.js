import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useState, useContext} from "react";
import Pagination from '../Components/PaginationFeature/Pagination'
import Header from "../Components/Header";
import { LoginContext } from '../index';
import './Inventory.css';
import axios from 'axios';

export default function Inventory() {

const [DataBase, setDB] = useState([]);

useEffect(()=>{
  axios.get("http://localhost:3001/inventory")
  .then((res)=>{
    setDB(res.data);
  })
});

    
    const [query, setQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [comicsPerPage, setComicsPerPage] = useState(16)

    // list of filtered InvetoryComics Books
    var inventoryComics = DataBase.filter(data => {
      if (query === '') {
        return data;
      } else if (data.MAIN_DESC.toLowerCase().includes(query.toLowerCase())) {
        return data;
      }
    }).map((data, index) => (
      <div className="comic-panel-single" key={index} MAIN_DESC={data.MAIN_DESC} PUBLISHER={data.PUBLISHER} PAGE_COUNT={data.PAGE_COUNT}>
        <Link to="/Inventory/ComicProfile"
            state={{
                MAIN_DESC: data.MAIN_DESC,
                COVER_ARTIST: data.COVER_ARTIST,
                IMAGE_URL_SMALL: data.IMAGE_URL_SMALL,
                PUBLISHER: data.PUBLISHER,
                STREET_DATE: data.STREET_DATE,
                ARTIST: data.ARTIST,
                AUTHOR: data.WRITER
            }}
        >
          <img className="comic-cover" src={data.IMAGE_URL_ORIGINAL} alt="Logo" />
        </Link>
        <div className="comic-title"> 
          <p>{data.MAIN_DESC}</p>
          <h6>{data.PUBLISHER}</h6>
          <h5>{data.PAGE_COUNT} {(data.PAGE_COUNT>1)?"Copies":"Copy"}</h5>
        </div>
      </div>
    ))

    const options = [
      {index: 0, label: "MAIN_DESC"},
      {index: 1, label: "PUBLISHER"},
      {index: 2, label: "#ofCopies"}
    ]

    const newComics = inventoryComics
   
    const book = ["MAIN_DESC", "PUBLISHER", "PAGE_COUNT"]
    const indexOfLastComics = currentPage * comicsPerPage
    const indexOfFirstComics = indexOfLastComics - comicsPerPage
    const currentComics = newComics.slice(indexOfFirstComics, indexOfLastComics)

    const loggedIn = useContext(LoginContext)

    return (
        <div>
        <Header loggedIn={loggedIn} user={"User"} />
        <div className="inventory">
          <div className="searchbar">
            <input placeholder="Search Comic Title" onChange={event => setQuery(event.target.value)} />
          </div>
          <div className="pagination">
          <Pagination 
                currentPage={currentPage}
                totalSize={inventoryComics.length}
                changeCurrentPage={setCurrentPage}
                sizePerPage={comicsPerPage}
                theme="bootstrap"
          />
          </div>
          <div className= "comic-panels">
              {currentComics}
          </div>
          <div className="pagination">
          <Pagination 
                currentPage={currentPage}
                totalSize={inventoryComics.length}
                changeCurrentPage={setCurrentPage}
                sizePerPage={comicsPerPage}
                theme="bootstrap"
          />
          </div>
          </div>
        </div>
        
    )
}
