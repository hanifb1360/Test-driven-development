import React from 'react';

export default function Login() {
  return (
    <div>
      <h1>Login</h1>

      <label htmlFor="username">Username</label>
      <input id="username" placeholder="username" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="password" />

      <button disabled>Login</button>
    </div>
  );
}
