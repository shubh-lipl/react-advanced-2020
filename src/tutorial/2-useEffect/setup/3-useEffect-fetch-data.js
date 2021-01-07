import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(url);
    const usersData = await response.json();
    setUsers(usersData);
  }

  useEffect(() => {
    fetchUsers();
  }, [])
  return <>
    <h2>fetching data</h2>
    <h3>github users</h3>
    <ul className='users'>
      {
        users.map((user) => {
          const { html_url, id, login, avatar_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })
      }
    </ul>
  </>;
};

export default UseEffectFetchData;
