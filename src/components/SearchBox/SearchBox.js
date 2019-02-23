import React from 'react';
//import rejiniPic from './rejiniPic.png';
import './Search.css';



const SearchBox = ({searchInput, searchChange}) => {
    return (
            <div className = 'tc pa1 mw5  br3 center shadow-5 pa2-ns mv1 ba b--black-10'>
              <input 
                type='search' 
                results={5}
                placeholder='Search Portfolio' 
                onChange={searchChange}/>
            </div>
          );
  }

export default SearchBox;