import React from 'react';
import {useState, useEffect} from "react";
import searchID from '../../Components/searchID';
import getUnique from '../../Components/getUnique';

export default function FanComicsMapping(props, arg, props2) {

    const [pics, setPics] = useState([]);

    const removeImage = (PS_NO) => {

         const to_remove = pics.filter((item) => item.PS_NO === PS_NO)[0]
         const index = props.indexOf(to_remove)
         setPics(props.splice(index, 1))
        
        setPics(pics.filter((item) => item.PS_NO !== PS_NO))
        
        console.log("nowState Size: "+pics.length)
      };
    
    const addImage = (PS_NO) => {

        props2.push(pics.filter((item) => item.PS_NO === PS_NO)[0])

        removeImage(PS_NO)

      };

      useEffect(() => {
        //fake fetch data
        setPics(props);
      }, []);

    var myProps = getUnique(pics,"PS_NO").map(function(image) {
        return (<div className="comic-panel-single" id="fancomics">
                    <img  src={image.IMAGE_URL_SMALL} rounded />
                    <div className="comic-panel-info">
                      <h3>{image.MAIN_DESC}</h3>
                      <h6>{image.PUBLISHER}</h6>
                      <h4>{searchID(props, image.PS_NO)} {(searchID(props, image.PS_NO)>1)?"Copies":"Copy"}</h4>
                      {(arg==0) ? <button className="FCbutton2" onClick={() => addImage(image.PS_NO)}>Complete</button> : <div></div>}
                      {(arg==0) ? <button className="FCbutton1" onClick={() => removeImage(image.PS_NO)}>Cancel</button> : <div></div>}

                    </div>
                </div>
        );      
       });

    return(
        
        <div>
            {console.log({myProps})}
           {myProps}
        </div>
    )
}