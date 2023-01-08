import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UserLogin from './UserLogin';

describe('User Login Page', () => {
  const setup = () => render(<UserLogin />);

  test('should have a username input', () => {
    // Arrange...
    render(<UserLogin />);
    const userNameInput = screen.getByLabelText('Username/Email');
    // Act...

    // Assert...
    expect(userNameInput).toBeInTheDocument();
  });

  test('should have a password input', () => {
    // Arrange...
    render(<UserLogin />);
    const passwordInput = screen.getByLabelText('Password');
    // Act...

    // Assert...
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.type).toBe('password');
  });
  test('should have a login button', () => {
    // Arrange...
    render(<UserLogin />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    // Act...

    // Assert...
    expect(loginButton).toBeInTheDocument();
  });

  test('login button should initially be disabled', () => {
    // Arrange...
    render(<UserLogin />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    // Act...

    // Assert...
    expect(loginButton).toBeDisabled();
  });

  describe('Form interactions', () => {
    test('login button should be enabled when username and password have values', async () => {
      // Arrange
      setup();

      const usernameInput = screen.getByLabelText('Username/Email');
      const password = screen.getByLabelText('Password');

      // Act
      await userEvent.type(usernameInput, 'Michael');
      await userEvent.type(password, 'Pa$$w0rd');
      const loginButton = screen.getByRole('button');

      // Assert
      expect(loginButton).toBeEnabled();
    });
  });
});
