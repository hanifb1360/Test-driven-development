import { render, screen } from '@testing-library/react';
import Login from './Login';
import userEvent from '@testing-library/user-event';

describe('login user component', () => {
  const setup = () => render(<Login />);

  test('should have a username input', () => {
    setup();
    const userNameInput = screen.getByLabelText('Username/Email');

    expect(userNameInput).toBeInTheDocument();
  });

  test('should have a password input', () => {
    setup();
    const passwordInput = screen.getByLabelText('Password');

    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.type).toBe('password');
  });

  test('should have a login button', () => {
    setup();
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  describe('Form interaction', () => {
    test('login button should be enabled when username and password have values', () => {
      setup();
      const usernameInput = screen.getByLabelText('Username/Email');
      const passwordInput = screen.getByLabelText('Password');

      userEvent.type(usernameInput, 'Michael');
      userEvent.type(passwordInput, 'password');
      const loginButton = screen.getByRole('button');
      expect(loginButton).toBeEnabled();
    });
  });
});
