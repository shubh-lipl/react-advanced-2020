import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/shubh-lipl'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState('Error...')
  const [user, setUser] = useState('default User')

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          setIsLoading(false);
          setIsError(true);
          setError(response.statusText);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        console.log(user);
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  if (isLoading) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    )
  }
  return (
    <div>
      <h2>{user}</h2>
    </div>
  )
}

export default MultipleReturns
