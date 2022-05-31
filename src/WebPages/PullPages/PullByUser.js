import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {useState} from "react";
import CustomerProfileBase from '../../Components/CustomerProfileBase';
import './PullByUser.css';
import Header from '../../Components/Header';
import {LoginContext} from '../../index';

export default function PullByUser() {

    const [query, setQuery] = useState("")

    const loggedIn = useContext(LoginContext)

    return (
        <div>
          <Header loggedIn={loggedIn} user={"User"} />
          <div className="inventory">
          {/* <li><Link to="/PullComics">Pull Comics</Link></li>
          <li><Link to="/">Main</Link></li> */}
          <div className="searchbar">
            <input placeholder="Search Fan Name" onChange={event => setQuery(event.target.value)} />
          </div>
        <div className="profile-panels">
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
              <div className="profile-panel-single" key={index}>
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
                    <img className="fan-pic" src={data.IMAGE_URL_SMALL} alt="Logo" />
                </Link>
                <p className="fan-name" >{data.firstName} {data.lastName}</p>
              </div>
            ))
        }
        </div>
        </div>
    </div>
    )
    
}

