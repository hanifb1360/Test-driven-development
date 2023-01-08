import { useState } from 'react';

const UserLogin = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsernameHandler = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (password.length > 0 && value.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };
  const onChangePasswordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length > 0 && username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  return (
    <section className='container'>
      <h1 className='page-title'>Register user</h1>
      <form>
        <div className='form-control'>
          <label htmlFor='username'>Username/Email</label>
          <input
            id='username'
            placeholder='username'
            value={username}
            onChange={onChangeUsernameHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='password'
            value={password}
            onChange={onChangePasswordHandler}
          />
        </div>
        <div className='form-control'>
          <input
            className='btn btn-primary'
            type='button'
            value='Login'
            disabled={buttonDisabled}
          />
        </div>
      </form>
    </section>
  );
};

export default UserLogin;
