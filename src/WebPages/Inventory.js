import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//import Data from '../Components/Data';
//import DataBase from '../Components/DataBase';
import ComicProfile from './ComicProfile';
import {useState, useContext} from "react";
import Pagination from '../Components/PaginationFeature/Pagination'
import Header from "../Components/Header";
import { LoginContext } from '../index';
import './Inventory.css';
import axios from 'axios';
//import { Select } from 'react-select'

export default function Inventory() {

const [DataBase, setDB] = useState([]);

useEffect(()=>{
  axios.get("http://localhost:3001/inventory")
  .then((res)=>{
    setDB(res.data);
  })
});


//console.log(DataBase)

    // const dataComponents = DataBase.map((data)=>{
    //     return <DataBase key={data.PS_NO} DIAMOND_NO={data.DIAMOND_NO} LUNAR_NO={data.LUNAR_NO} PRH_NO={data.PRH_NO}
    //     MAIN_DESC={data.MAIN_DESC} PAGE_COUNT={data.PAGE_COUNT} WRITER={data.WRITER} ARTIST={data.ARTIST}
    //     COVER_ARTIST={data.COVER_ARTIST} STREET_DATE={data.STREET_DATE} FOC_DATE={data.FOC_DATE} MSRP={data.MSRP}
    //     DISCOUNT_CODE={data.DISCOUNT_CODE} SERIES_CODE={data.SERIES_CODE} ISSUE_NO={data.ISSUE_NO} COVER_NUMBER={data.COVER_NUMBER}
    //     MAX_ISSUE={data.MAX_ISSUE} PUBLISHER={data.PUBLISHER} CATEGORY={data.CATEGORY} MATURE={data.MATURE} ADULT={data.ADULT}
    //     ORDER_FORM_NOTES={data.ORDER_FORM_NOTES} PREVIEWS_PAGE={data.PREVIEWS_PAGE} UPC_NO={data.UPC_NO} EAN_NO={data.EAN_NO}
    //     PRODUCT_COPY={data.PRODUCT_COPY} PULL_COUNT={data.PULL_COUNT} SUB_COUNT={data.SUB_COUNT} TEST_PRODUCT={data.TEST_PRODUCT}
    //     DATE_ADDED={data.DATE_ADDED} VARIANT={data.VARIANT} VARIANT_RATIO={data.VARIANT_RATIO} LIMITED_VARIANT={data.LIMITED_VARIANT}
    //     VARIANT_NOTES={data.VARIANT_NOTES} NUMBER_OF_COVERS={data.NUMBER_OF_COVERS} FCBD={data.FCBD} HC={data.HC} TP={data.TP} 
    //     GN={data.GN} DISPLAY_TITLE={data.DISPLAY_TITLE} IMAGE_URL_SMALL={data.IMAGE_URL_SMALL} IMAGE_URL_SMALL_2x={data.IMAGE_URL_SMALL_2x}
    //     IMAGE_URL_SMALL_3x={data.IMAGE_URL_SMALL_3x} IMAGE_URL_MEDIUM={data.IMAGE_URL_MEDIUM} IMAGE_URL_MEDIUM_2x={data.IMAGE_URL_MEDIUM_2x}
    //     IMAGE_URL_MEDIUM_3x={data.IMAGE_URL_MEDIUM_3x} IMAGE_URL_ORIGINAL={data.IMAGE_URL_ORIGINAL}
    //     />
    // })
    
    const [query, setQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [comicsPerPage, setComicsPerPage] = useState(16)


    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path="/Inventory/ComicProfile" element={<ComicProfile props={data}/>} />
    //         </Routes>
    //     </BrowserRouter>
    // )


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

    //console.log({inventoryComics})
    // var newComics = inventoryComics
    //console.log(inventoryComics[0].props.MAIN_DESC)

    
    // const MyComponent = () => (
    //   <Select options={options} />
    // )

    const options = [
      {index: 0, label: "MAIN_DESC"},
      {index: 1, label: "PUBLISHER"},
      {index: 2, label: "#ofCopies"}
    ]

    const newComics = inventoryComics

    // const sortedDESC = newComics.sort((a,b)=>{
    //   return a.props.MAIN_DESC > b.props.MAIN_DESC ? 1 : -1
    // })

    // const sortedPUBLISHER = newComics.sort((a,b)=>{
    //   return a.props.PUBLISHER > b.props.PUBLISHER ? 1 : -1
    // })

    // const sortedCOPIES = newComics.sort((a,b)=>{
    //   return a.props.PAGE_COUNT > b.props.PAGE_COUNT ? 1 : -1
    // })

    //const sortedSelection = [sortedDESC, sortedPUBLISHER, sortedCOPIES]

    var id = 2;
    //options[id].index
    const book = ["MAIN_DESC", "PUBLISHER", "PAGE_COUNT"]
    const indexOfLastComics = currentPage * comicsPerPage
    const indexOfFirstComics = indexOfLastComics - comicsPerPage
    const currentComics = newComics.slice(indexOfFirstComics, indexOfLastComics)

    //console.log("sortedSelection: "+sortedSelection[0])

    //const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
                /*comicsPerPage={comicsPerPage}
                totalComics={inventoryComics.length}
                paginate = {paginate}*/
                currentPage={currentPage}
                totalSize={inventoryComics.length}
                changeCurrentPage={setCurrentPage}
                sizePerPage={comicsPerPage}
                theme="bootstrap"
          />
          </div>
          <div className= "comic-panels">
              {/* {console.log("InvetoryComics:"+inventoryComics)}
              {console.log("sortedData:"+sortedData[0].MAIN_DESC)} */}
              {currentComics}
          </div>
          <div className="pagination">
          <Pagination 
                /*comicsPerPage={comicsPerPage}
                totalComics={inventoryComics.length}
                paginate = {paginate}*/
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
    /*return (
        <div>
            <h1>Inventory!!</h1>
            <li><Link to="/">Main</Link></li>
            
        </div>
    )*/
}


/*
DataBase.filter(data => {
  if (query === '') {
    return data;
  } else if (data.MAIN_DESC.toLowerCase().includes(query.toLowerCase())) {
    return data;
  }
}).map((data, index) => (
  <div className="box" key={index}>
    <p>{data.MAIN_DESC}</p>
    <Link to="/Inventory/ComicProfile"
        state={{
            MAIN_DESC: data.MAIN_DESC,
            COVER_ARTIST: data.COVER_ARTIST,
            DIAMOND_NO: data.DIAMOND_NO,
            IMAGE_URL_SMALL: data.IMAGE_URL_SMALL,
        }}
    >
        <img src={data.IMAGE_URL_SMALL} alt="Logo" />
    </Link>
  </div>
))
*/