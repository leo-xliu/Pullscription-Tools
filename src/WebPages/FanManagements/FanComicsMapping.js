import React from 'react';
import {useState, useEffect} from "react";
import searchID from '../../Components/searchID';
import getUnique from '../../Components/getUnique';

export default function FanComicsMapping(props, arg, props2) {

   // var fullFill = []

   // (arg==0) ? fullFill=props2 : []

    const [pics, setPics] = useState([]);

    //console.log("props Size: " + props.length)

    const removeImage = (PS_NO) => {
        // this is the line that you are looking for
        //setPics((oldState) => oldState.filter((item) => item.PS_NO !== PS_NO));

         const to_remove = pics.filter((item) => item.PS_NO === PS_NO)[0]
         const index = props.indexOf(to_remove)
         setPics(props.splice(index, 1))
         //document.getElementsByName("PButton")[0].click()

        //document.getElementsByName("PButton")[0].click()
        //myProps.splice(index, 1)
        
        setPics(pics.filter((item) => item.PS_NO !== PS_NO))
        
        //props = Array.from(pics)
        console.log("nowState Size: "+pics.length)
      };
    
    const addImage = (PS_NO) => {
        // this is the line that you are looking for
        //setPics((oldState) => oldState.filter((item) => item.PS_NO !== PS_NO));
       // console.log(props2.length)
        props2.push(pics.filter((item) => item.PS_NO === PS_NO)[0])
        //console.log(props2)
        removeImage(PS_NO)
       // console.log(props2.length)
        //console.log(props2)
      };

      useEffect(() => {
        //fake fetch data
        setPics(props);
      }, []);

//<button onClick={() => removeImage(image.PS_NO)}>X</button>
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
            {/* {(arg==0) ? console.log("pics length pulled: ") : ""}
            {(arg==0) ? console.log(myProps.length)  : ""}     
            {(arg==1) ? console.log("pics length fullfiled: ") : ""}
            {(arg==1) ? console.log(myProps.length)  : ""}  */}
            {/* {(arg==1) ? console.log("props Size: " + props.length) : ""} */}
            {console.log({myProps})}
           {myProps}
        </div>
    )
}