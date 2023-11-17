import React, { useState } from 'react';

function UserList() {

  const [users, setUsers] = useState([]);

  
  const addUser = () => {
    
    const id = Math.floor(Math.random() * 1000);

    const name = 'Taiyab Ansari';
    const email = 'taiyab@gmail.com';

    const newUser = { id, name, email };

    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>User List</h1>

      
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`}
          </li>
        ))}
      </ul>

      
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default UserList;
