import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    setPeople(oldPeople => {
      let newPeople = oldPeople.filter((i) => i.id !== id);
      return newPeople;
    });
  }

  return <>
  <h2>useState array example</h2>
  {
    people.map(({id, name}) => {
      return (
      <div key={id} className="item">
        <h4>{name}</h4>
        <button type="button" onClick={() => removeItem(id)}>&times;</button>
      </div>
      )
    })
  }
  <button type="button" className="btn" onClick={() => setPeople([])}>Clear</button>
  </>;
};

export default UseStateArray;
