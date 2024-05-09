import React, { useState, useEffect } from 'react';

// Component to display a list of users
const UsersList = () => {
  // users is the state variable where I store users,
  // setUsers is the function I use to update that state.
  const [users, setUsers] = useState([]);

  // useEffect is used to perform side effects in the component.
  // I use it to fetch data right after the component renders.
  useEffect(() => {
    // Asynchronous function to fetch users from an API.
    const fetchData = async () => {
      // Attempt to fetch data from the API.
      try {
        const response = await fetch('https://dummyjson.com/users');
        // If the response is not successful, throw an error.
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Extract the JSON from the response.
        const data = await response.json();
        // Update the users state with the users data from the API.
        setUsers(data.users); // Assuming the API returns an object with a 'users' array
      } catch (error) {
        // If there was an error fetching data, log it to the console.
        console.log('Failed to fetch users:', error);
      }
    };
    // Call the fetchData function.
    fetchData();
  }, []); // Empty dependency array means this effect only runs once, after the initial render

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {/* Map through the users array in state and create a list item for each user */}
        {users.map(user => (
          <li key={user.id}> {/* Each user needs a unique key for React to manage re-renders efficiently */}
            {user.firstName} {user.lastName}- {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
