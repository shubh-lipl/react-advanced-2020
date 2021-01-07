import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const changeWidth = () => {
    setSize(window.innerWidth);
  }

  // useEffect(() => {
  //   console.log('useEffect triggered!!');
  //   window.addEventListener('resize', changeWidth);
  // }, [])

  useEffect(() => {
    console.log('useEffect triggered!!');
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  })

  return <>
    <h2>useEffect cleanup</h2>
    <h1>{size} PX</h1>
  </>;
};

export default UseEffectCleanup;
