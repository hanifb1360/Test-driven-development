import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('login user component', () => {
  describe('login user page', () => {
    test('has a header saying login User', () => {
      render(<Login />);
      const titleText = screen.getByRole('heading', {
        name: 'Login',
      });
      expect(titleText).toBeInTheDocument();
    });

    test('has an username input', () => {
      render(<Login />);
      const userInput = screen.getByLabelText('Username');
      expect(userInput).toBeInTheDocument();
    });

    test('has an password input', () => {
      render(<Login />);
      const passwordInput = screen.getByLabelText('Password');
      expect(passwordInput).toBeInTheDocument();
      expect(passwordInput.type).toBe('password');
    });

    test('should have a login button', () => {
      render(<Login />);
      const loginButton = screen.getByRole('button', { name: 'Login' });
      // expect(loginButton).toBeInTheDocument();
      expect(loginButton).toBeDisabled();
    });
  });
});
