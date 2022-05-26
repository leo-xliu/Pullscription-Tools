import React from 'react'

import DataBase from './DataBase'

const CustomerProfileBase=[
    {
        "firstName": "Samuel",
        "lastName": "Patterson",
        "email": "email1",
        "storeId": "1",
        "pulledComicsSetAside": [DataBase[0],DataBase[1], DataBase[2]],
        "pulledComics": [DataBase[3],DataBase[4], DataBase[5]],
        "fulfilledComics": [DataBase[6],DataBase[7], DataBase[8]],
        "neverFulfilledComics": [DataBase[9]]
    },

    {
        "firstName": "Justin",
        "lastName": "Wright",
        "email": "email2",
        "storeId": "1",
        "pulledComicsSetAside": [DataBase[0],DataBase[1], DataBase[2]],
        "pulledComics": [DataBase[10],DataBase[11], DataBase[12]],
        "fulfilledComics": [DataBase[6],DataBase[7], DataBase[8]],
        "neverFulfilledComics": [DataBase[9]]
    },

    {
        "firstName": "Paula",
        "lastName": "Reyes",
        "email": "email3",
        "storeId": "1",
        "pulledComicsSetAside": [DataBase[0],DataBase[1], DataBase[2]],
        "pulledComics": [DataBase[13],DataBase[14], DataBase[15]],
        "fulfilledComics": [DataBase[6],DataBase[7], DataBase[8]],
        "neverFulfilledComics": [DataBase[9]]
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