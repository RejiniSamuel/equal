import React from 'react';
//import rejiniPic from './rejiniPic.png';
//import './App.css';



const UserInput = ( {userName, userInputChange} ) => {
    return (
            <div className = 'tc pa2'>
              <input 
              classname='pa2'
                type='search' 
                placeholder={userName}
                onChange={userInputChange} />
            </div>
          );
  }

export default UserInput;