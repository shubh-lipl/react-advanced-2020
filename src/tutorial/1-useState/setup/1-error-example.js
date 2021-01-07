import React from 'react';

const ErrorExample = () => {
  let title = 'useState error example';

  const onClickHandler = () => {
    title = 'You clicked man!!!'
    console.log(title);
  };
  
  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={onClickHandler}>Change Text</button>
  </React.Fragment>
};

export default ErrorExample;
