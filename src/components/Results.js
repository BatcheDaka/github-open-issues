import React from 'react';
import './Results.css'

function Results(props) {

  const { repos } = props;

  const listRepos = repos.length !== 0 
  ?
   repos.map(
     (item) =>
    <li key={item.id || ''}> 
    <span> <h5>Title:</h5> <a target="_blank" href={item.html_url || ''}>{item.title || ''}</a>
      </span>

      {item.assignee == null ? "" :
      <div className="assignee">
       Assignee: ${item.assignee.login}
       <img src={item.assignee.avatar_url} alt="Avatar" />
       </div>
       }

    </li>
    )


  : <li>No Issues found for this repo</li>;

  return (
    <ul className="unorder__list"> <h1>ISSUES:</h1> {listRepos}</ul>


  )
}

export default Results;
