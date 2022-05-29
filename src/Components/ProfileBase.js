import React from 'react'

const ProfileBase=[
    {
        "Name":"Nikita",
        "Marks":"98",
        "Phone":"123"
    },
    {
       "Name":"Pratiksha",
        "Marks":"96",
        "Phone":"127"
    },
    {
        "Name":"Muskan",
        "Marks":"97",
        "Phone":"163"
    },
    {
       "Name":"Nishi",
       "Marks":"95",
       "Phone":"193"
    },
    {
       "Name":"Himanshu",
      "Marks":"78",
      "Phone":"120"
    }
]

export default ProfileBase




/*

Customer profile: {
firstName: String,
lastName: String,
email: String,
storeId: Int,
pulledComics: [Comic],
pulledComicsSetAside: [Comic],
fulfilledComics: [Comic],
neverFulfilledComics: [Comic]
}

PulledComicsSetAside - Fan Management (pulled tab)

PulledComicsSetAside - Fan Management (pulled tab)

neverFulfilledComics - used to calculate pull/fulfill ratio on fan management page.

Equation is all other arrays except for never fulfilled divided by all four arrays.

*/