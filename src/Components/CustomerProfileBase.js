import React from 'react'

import DataBase from './DataBase'

import CroppedActor from '../Images/Customers/CroppedActor.JPEG'
import CroppedCollegeStudent from '../Images/Customers/CroppedCollegeStudent.JPEG'
import CroppedComicArtist from '../Images/Customers/CroppedComicArtist.JPEG'
import CroppedComicFan from '../Images/Customers/CroppedComicFan.JPEG'
import CroppedFan2 from '../Images/Customers/CroppedFan2.JPEG'
import CroppedFan3 from '../Images/Customers/CroppedFan3.JPEG'
import CroppedJokerFan from '../Images/Customers/CroppedJokerFan.JPEG'
import CroppedNerdGod from '../Images/Customers/CroppedNerdGod.JPEG'
import CroppedSpiderGirl from '../Images/Customers/CroppedSpiderGirl.JPEG'

const CustomerProfileBase=[
    {
        "firstName": "Alister",
        "lastName": "Addison",
        "email": "email1",
        "storeId": "1",
        "pulledComicsSetAside": [DataBase[0],DataBase[1], DataBase[2],DataBase[1], DataBase[2],DataBase[2]],
        "pulledComics": [DataBase[3],DataBase[4], DataBase[5],DataBase[4], DataBase[5],DataBase[5]],
        "fulfilledComics": [DataBase[6],DataBase[7], DataBase[8],DataBase[7], DataBase[8]],
        "neverFulfilledComics": [DataBase[9],DataBase[9],DataBase[9]],
        "IMAGE_URL_SMALL":CroppedActor
    },

    {
        "firstName": "Anastasia",
        "lastName": "Arloffsky",
        "email": "email2",
        "storeId": "1",
        "pulledComicsSetAside": [DataBase[0],DataBase[1], DataBase[2]],
        "pulledComics": [DataBase[10],DataBase[11], DataBase[12],DataBase[11], DataBase[12]],
        "fulfilledComics": [DataBase[6],DataBase[7], DataBase[8]],
        "neverFulfilledComics": [DataBase[9]],
        "IMAGE_URL_SMALL":CroppedCollegeStudent
    },

    {
        "firstName": "Martin",
        "lastName": "Aestwick",
        "email": "email3",
        "storeId": "1",
        "pulledComicsSetAside": [DataBase[0],DataBase[1], DataBase[2]],
        "pulledComics": [DataBase[13],DataBase[14], DataBase[15]],
        "fulfilledComics": [DataBase[6],DataBase[7], DataBase[8]],
        "neverFulfilledComics": [DataBase[9]],
        "IMAGE_URL_SMALL":CroppedComicArtist
    },

    {
        "firstName": "Betty",
        "lastName": "Aarner",
        "email": "email3",
        "storeId": "1",
        "pulledComicsSetAside": [DataBase[0],DataBase[1], DataBase[2]],
        "pulledComics": [DataBase[18],DataBase[44], DataBase[55]],
        "fulfilledComics": [DataBase[20],DataBase[23], DataBase[81]],
        "neverFulfilledComics": [DataBase[29]],
        "IMAGE_URL_SMALL":CroppedComicFan
    },

    {
        "firstName": "Mina",
        "lastName": "Auo",
        "email": "email3",
        "storeId": "1",
        "pulledComicsSetAside": [DataBase[0],DataBase[1], DataBase[2]],
        "pulledComics": [DataBase[18],DataBase[44], DataBase[55]],
        "fulfilledComics": [DataBase[20],DataBase[23], DataBase[81]],
        "neverFulfilledComics": [DataBase[29]],
        "IMAGE_URL_SMALL":CroppedFan2
    },

    {
        "firstName": "Javier",
        "lastName": "Axchequer",
        "email": "email3",
        "storeId": "1",
        "pulledComicsSetAside": [DataBase[0],DataBase[1], DataBase[2]],
        "pulledComics": [DataBase[18],DataBase[44], DataBase[55]],
        "fulfilledComics": [DataBase[20],DataBase[23], DataBase[81]],
        "neverFulfilledComics": [DataBase[29]],
        "IMAGE_URL_SMALL":CroppedFan3
    },

    {
        "firstName": "Jared",
        "lastName": "Aedger",
        "email": "email3",
        "storeId": "1",
        "pulledComicsSetAside": [DataBase[0],DataBase[1], DataBase[2]],
        "pulledComics": [DataBase[18],DataBase[44], DataBase[55]],
        "fulfilledComics": [DataBase[20],DataBase[23], DataBase[81]],
        "neverFulfilledComics": [DataBase[29]],
        "IMAGE_URL_SMALL":CroppedJokerFan
    },

    {
        "firstName": "Father",
        "lastName": "Albrecht",
        "email": "email3",
        "storeId": "1",
        "pulledComicsSetAside": [DataBase[0],DataBase[1], DataBase[2]],
        "pulledComics": [DataBase[18],DataBase[44], DataBase[55]],
        "fulfilledComics": [DataBase[20],DataBase[23], DataBase[81]],
        "neverFulfilledComics": [DataBase[29]],
        "IMAGE_URL_SMALL":CroppedNerdGod
    },

    {
        "firstName": "Gwen",
        "lastName": "Astacy",
        "email": "email3",
        "storeId": "1",
        "pulledComicsSetAside": [DataBase[0],DataBase[1], DataBase[2]],
        "pulledComics": [DataBase[18],DataBase[44], DataBase[55]],
        "fulfilledComics": [DataBase[20],DataBase[23], DataBase[81]],
        "neverFulfilledComics": [DataBase[29]],
        "IMAGE_URL_SMALL":CroppedSpiderGirl
    }
]

export default CustomerProfileBase
/*
const CustomerProfileBase: {
firstName: String,
lastName: String,
email: String,
storeId: Int,
pulledComics: [Comic],
pulledComicsSetAside: [Comic],
fulfilledComics: [Comic],
neverFulfilledComics: [Comic]
}
*/

/*
PulledComicsSetAside - Fan Management (pulled tab)

PulledComicsSetAside - Fan Management (pulled tab)

neverFulfilledComics - used to calculate pull/fulfill ratio on fan management page.

Equation is all other arrays except for never fulfilled divided by all four arrays.

*/