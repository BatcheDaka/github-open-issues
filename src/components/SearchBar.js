import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Results from './Results';

function SearchBar() {
  
    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState(JSON.parse(localStorage.getItem('prevRepo')) || []);
    
    

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
const result = await axios(`https://api.github.com/repos/${searchInput}/issues`);
setRepos(result);
console.log(result);
localStorage.setItem("prevRepo",  JSON.stringify(result))
        } catch(err){
            setRepos([]);
        }

      };
   
  return (
    <> 
    <div style={{padding: "20px"}}>
   <input type="text" placeholder="Search" value={searchInput} onChange={handleChange}/>
   <button onClick={handleClick}>Search</button>
    </div>
    <Results repos={repos}/>
    </> 
  );
}

export default SearchBar;
