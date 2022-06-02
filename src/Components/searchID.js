import React from 'react'
import {useState, useEffect} from "react";

function searchID(arr, val) {

    console.log("arr: "+arr)
    const count = arr.filter(function(value){
        return value.PS_NO == val;
    }).length

     return count;
  }

export default searchID