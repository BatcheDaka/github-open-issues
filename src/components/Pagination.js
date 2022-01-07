import React from 'react';
import style from "./Pagination.module.scss";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];
console.log(totalPosts)
    for(let i =1; i<= Math.ceil(totalPosts /postsPerPage); i++) {
   pageNumbers.push(i);
    }
  return (
    <div className={style.pagination}>
        <ul className={style.page}>
        <KeyboardDoubleArrowLeftIcon>   <li class={style.page__btn}><span class={style.material__icons}></span></li></KeyboardDoubleArrowLeftIcon>
            {pageNumbers.map(number => 
                <li key={number} className={style.page__numbers}>
<a onClick={(e) => { e.preventDefault()
   paginate(number)}} href="">
{number}</a>
                </li>)}
               <KeyboardDoubleArrowRightIcon> <li class={style.page__btn}><span class={style.material__icons}></span></li></KeyboardDoubleArrowRightIcon>
        </ul>
    </div>
  )
}

export default Pagination