import { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3010/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <section
      data-testid='user-list-component'
      className='container'
    >
      <h1 className='page-title'>Our Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.userName}</li>
        ))}
      </ul>
    </section>
  );
};

export default UserList;
