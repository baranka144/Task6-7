import React, { useState, useEffect } from 'react';
import './App.css';

interface User {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  height: number;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showFirstName, setShowFirstName] = useState(true);
  const [showLastName, setShowLastName] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showUsername, setShowUsername] = useState(true);
  const [showHeight, setShowHeight] = useState(true);


  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <label>
          <input type="checkbox" checked={showFirstName} onChange={() => setShowFirstName(!showFirstName)} />
          Show First Name
        </label>
        <label>
          <input type="checkbox" checked={showLastName} onChange={() => setShowLastName(!showLastName)} />
          Show Last Name
        </label>
        <label>
          <input type="checkbox" checked={showEmail} onChange={() => setShowEmail(!showEmail)} />
          Show Email
        </label>
        <label>
          <input type="checkbox" checked={showUsername} onChange={() => setShowUsername(!showUsername)} />
          Show Gender
        </label>
        <label>
          <input type="checkbox" checked={showHeight} onChange={() => setShowHeight(!showHeight)} />
          Show Height
        </label>
      </div>
      <table className='UserTable'>
        <thead>
          <tr>
            <th>Image</th>
            {showFirstName && <th>First Name</th>}
            {showLastName && <th>Last Name</th>}
            {showEmail && <th>Email</th>}
            {showUsername && <th>Username</th>}
            {showHeight && <th>Height</th>}
          </tr>
        </thead>
        <tbody>
        {
          users.map(user => {
            return (
              <tr key={user.id}>
                {<td><img src={user.image} height="100" width="100"/></td>}
                {showFirstName && <td>{user.firstName}</td>}
                {showLastName && <td>{user.lastName}</td>}
                {showEmail && <td>{user.email}</td>}
                {showUsername && <td>{user.username}</td>}
                {showHeight && <td>{user.height}</td>}
              </tr>
            )
          })
        } 
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
