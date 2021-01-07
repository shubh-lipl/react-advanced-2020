import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('useState basic example');

  const onClickHandler = () => {
    if( title === 'useState basic example') {
      setTitle('WOW, you know how to use useState');
    } else {
      setTitle('useState basic example'); 
    }
    
  };
  
  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={onClickHandler}>Change Text</button>
  </React.Fragment>
};

export default UseStateBasics;
