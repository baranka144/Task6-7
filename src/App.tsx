import React, {useState} from 'react';
import userData from './data.json';
import './App.css';

function UserList() {
  const [showFirstName, setShowFirstName] = useState(true);
  const [showLastName, setShowLastName] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showGender, setShowGender] = useState(true);
  const [showCarModel, setShowCarModel] = useState(true);

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
          <input type="checkbox" checked={showGender} onChange={() => setShowGender(!showGender)} />
          Show Gender
        </label>
        <label>
          <input type="checkbox" checked={showCarModel} onChange={() => setShowCarModel(!showCarModel)} />
          Show Car Model
        </label>
      </div>
      <table className='UserTable'>
        <thead>
          <tr>
            {showFirstName && <th>First Name</th>}
            {showLastName && <th>Last Name</th>}
            {showEmail && <th>Email</th>}
            {showGender && <th>Gender</th>}
            {showCarModel && <th>Car model</th>}
          </tr>
        </thead>
        <tbody>
          {userData.map(user => {
            return (
              <tr key={user.id}>
                {showFirstName && <td>{user.first_name}</td>}
                {showLastName && <td>{user.last_name}</td>}
                {showEmail && <td>{user.email}</td>}
                {showGender && <td>{user.gender}</td>}
                {showCarModel && <td>{user.car_model}</td>}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
