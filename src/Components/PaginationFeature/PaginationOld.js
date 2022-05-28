import React from 'react'

const Pagination = ({comicsPerPage, totalComics, paginate}) => {

    var comicsNumbers = [];

    for(let i=1; i<=Math.ceil(totalComics/comicsPerPage); i++){
        comicsNumbers.push(i);
    }

    return (
        <div>
            {comicsNumbers.map(number => (
                <li key={number}>
                    <a onClick={()=>paginate(number)}>
                        {number}     
                    </a>          
                </li>
            ))}
        </div>
    )
}

export default Pagination