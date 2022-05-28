import React from 'react'

const Pagination = ({comicsPerPage, totalComics, paginate}) => {

    var comicsNumbers = [];

    for(let i=1; i<=Math.ceil(totalComics/comicsPerPage); i++){
        comicsNumbers.push(i);
    }

    return (
        <div>
            {comicsNumbers.map(number => (
                <button key={number}>
                    <a onClick={()=>paginate(number)}>
                        {number}     
                    </a>          
                </button>
            ))}
        </div>
    )
}

export default Pagination