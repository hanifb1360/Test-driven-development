import { render, screen } from '@testing-library/react';
import Register from './Register';

describe('register user component', () => {
  describe('register user page', () => {
    test('has a header saying Register User', () => {
      render(<Register />);
      const titleText = screen.getByRole('heading', {
        name: 'Register',
      });
      expect(titleText).toBeInTheDocument();
    });

    test('has an username input', () => {
      //arange
      render(<Register />);
      // const userInput = screen.getByPlaceholderText('username');
      const userInput = screen.getByLabelText('Username');
      //Act
      //Assert
      expect(userInput).toBeInTheDocument();
    });

    test('has an email input', () => {
      render(<Register />);
      const emailInput = screen.getByLabelText('Email');
      expect(emailInput).toBeInTheDocument();
    });

    test('has an password input', () => {
      render(<Register />);
      const passwordInput = screen.getByLabelText('Password');
      expect(passwordInput).toBeInTheDocument();
      expect(passwordInput.type).toBe('password');
    });

    test('has a confirm password input', () => {
      render(<Register />);
      const confirmPasswordInput = screen.getByLabelText('Confirm Password');
      expect(confirmPasswordInput).toBeInTheDocument();
      expect(confirmPasswordInput.type).toBe('password');
    });

    test('should have a register button', () => {
      render(<Register />);
      const registerButton = screen.getByRole('button', {
        name: 'Register',
      });
      expect(registerButton).toBeDisabled();
    });
  });
});
