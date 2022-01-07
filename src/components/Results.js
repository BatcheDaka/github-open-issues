import React from 'react';
import ListRepos from './ListRepos';


function Results(props) {

    const {repos} = props;
 
    const listRepos = repos.length !==0  ?  repos.map( (item) =>
    <li key={item.id}>Title: <a href={item.html_url}>{item.title}{item.assignee}</a></li>)
     : <li>No Issues found for this repo</li>;
  
  return (
    <ul>ISSUES: {listRepos}</ul>

    
  )
}

export default Results;
