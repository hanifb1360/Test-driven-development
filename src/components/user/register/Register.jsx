import { useState } from 'react';

export default function Register() {
  const [buttonDisabled, setButtonDisabled] = useState('true');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChangePasswordHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setPassword(value);
    setButtonDisabled(value !== confirmPassword);
  };
  const onChangeConfirmPasswordHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setConfirmPassword(value);
    setButtonDisabled(value !== password);
  };
  return (
    <section className="container">
      <h1 className="page-title">Register</h1>
      <form>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input id="username" placeholder="username" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Email" />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onChangePasswordHandler}
          />
        </div>

        <div className="form-control">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={onChangeConfirmPasswordHandler}
          />
        </div>
        <div className="form-control">
          <button disabled={buttonDisabled}>Register</button>
        </div>
      </form>
    </section>
  );
}
