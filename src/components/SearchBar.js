import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Results from './Results';
import Pagination from './Pagination';
function SearchBar() {
  
    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState(JSON.parse(localStorage.getItem('prevRepo')) || []);
    const [currentPage, setCurrentPages] = useState(1);
    const [postsPerPage] = useState(10);

      const handleChange = (e) => {
          setSearchInput(e.target.value);
          localStorage.setItem("inputValue", e.target.value);
         
      }
  
      useEffect(() => {
        setSearchInput(localStorage.getItem("inputValue"));
      
      }, []);

      const handleClick = async () => {
        localStorage.removeItem("prevRepo")
    
        try {
const result = await axios(`https://api.github.com/repos/${searchInput}/issues?per_page=100&page=${currentPage}`);
setRepos(result);

localStorage.setItem("prevRepo",  JSON.stringify(result))
        } catch(err){
            setRepos([]);
        }

      };
    
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
   let currentPosts = repos.data;
   let length = 0;
  if (currentPosts) {
    length = currentPosts.length;
   currentPosts=  currentPosts.slice(indexOfFirstPost, indexOfLastPost)
    
  } 
//   else {
//       currentPosts = [];
//   }
console.log(currentPosts);

const paginate = (pageNumber) => setCurrentPages(pageNumber);
  return (
    <> 
    <div style={{padding: "20px"}}>
   <input type="text" placeholder="Search" value={searchInput} onChange={handleChange}/>
   <button onClick={handleClick}>Search</button>
    </div>
    <Results repos={currentPosts || []}/>
    <Pagination postsPerPage={postsPerPage} totalPosts={length}
     paginate={paginate}/>
    </> 
  );
}

export default SearchBar;

