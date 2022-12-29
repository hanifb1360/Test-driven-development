import React from 'react';

export default function Register() {
  return (
    <div>
      <h1>Register</h1>

      <label htmlFor="username">Username</label>
      <input id="username" placeholder="username" />

      <label htmlFor="email">Email</label>
      <input id="email" placeholder="Email" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="Password" />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Confirm Password"
      />
      <button disabled>Register</button>
    </div>
  );
}
