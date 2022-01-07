import React from 'react'

function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];
console.log(totalPosts)
    for(let i =1; i<= Math.ceil(totalPosts /postsPerPage); i++) {
   pageNumbers.push(i);
    }
  return (
    <nav>
        <ul>
            {pageNumbers.map(number => 
                <li key={number}>
<a onClick={(e) => { e.preventDefault()
   paginate(number)}} href="">
{number}</a>
                </li>)}
        </ul>
    </nav>
  )
}

export default Pagination