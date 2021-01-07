import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function

const initialState = {
  people: [],
  isModalShown: false,
  modalContent: 'Hello world!!!'
}


const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  }


  return <>
    {
      state.isModalShown && <Modal closeModal={closeModal} people={state.people} modalContent={state.modalContent} />
    }
    <form onSubmit={handleSubmit} className="form">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add</button>
    </form>
    {
      state.people.map(person => {
        return <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <button type="button" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>Remove</button>
        </div>
      })
    }
  </>;
};

export default Index;
