import React, { useEffect } from 'react'

import {useSelector, useDispatch} from 'react-redux'

import {addUsers, delUser} from './features/users/userSlice'

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch('https://randomuser.me/api/?results=10')
      const data = await response.json();
      console.log(data);
      dispatch(addUsers(data.results));
    }
    fetchUser();
  }, []);


  let { usersList } = useSelector((state) => state.user);
 function handleDel(user) {
    dispatch(delUser(user))
 }
  return (
    <div className="main--container">
      {
        usersList.length > 0 && usersList.map((user) => (
          <div className="user--container">
            <img src={user.picture.large} />
            <span>{user.name.title}.{user.name.first}</span>
            <button onClick={() => handleDel(user)}>Remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default App