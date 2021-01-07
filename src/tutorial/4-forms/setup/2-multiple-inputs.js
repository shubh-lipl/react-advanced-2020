import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('')
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  const [person, setPerson] = useState({
    firstName: '', email: '', age: ''
  });
  const [people, setPeople] = useState([]);

  const handlerChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  }


  const handlerSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() }
      setPeople((people) => {
        return [...people, newPerson];
      })
      setPerson({
        firstName: '', email: '', age: ''
      })
    }
  }

  return (
    <div>
      <h2>controlled inputs</h2>
      <form className="form" onSubmit={handlerSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handlerChange} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input type="text" id="email" name="email" value={person.email} onChange={handlerChange} />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age : </label>
          <input type="text" id="age" name="age" value={person.age} onChange={handlerChange} />
        </div>
        <button type="submit">add person</button>
      </form>
      {
        people.map((person) => {
          const { id, firstName, email, age } = person
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h4>{age}</h4>
              <p>{email}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default ControlledInputs;
