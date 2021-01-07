  import React, { useState } from 'react';

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: 'John',
  //   age: 25,
  //   message: 'Some complex message'
  // });

  const [name, set] = useState('John');
  const [age, setAge] = useState(25);
  const [message, setMessage] = useState('Some complex message');
  const onMessageChange = ()  => {
    setMessage('helloww worlddd');
  }
  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button type="button" className="btn" onClick={onMessageChange}>Change Message</button>
  </>;
};

export default UseStateObject;
