import { render, screen } from '@testing-library/react';
import Register from './Register';
import userEvent from '@testing-library/user-event';

describe('register user component', () => {
  const setup = () => render(<Register />);
  describe('register user page', () => {
    test.skip('has a title text saying Register User', () => {
      // render(<Register />);
      setup();
      const titleText = screen.getByRole('heading', {
        name: 'Register',
      });
      expect(titleText).toBeInTheDocument();
    });

    // Jasmin style of writing with it instead of test
    // and if you want to skip the test it should be xit instead of it

    it('has an username input', () => {
      //arange
      setup();
      // const userInput = screen.getByPlaceholderText('username');
      const userInput = screen.getByLabelText('Username');
      expect(userInput).toBeInTheDocument();
    });

    test('has an email input', () => {
      setup();
      const emailInput = screen.getByLabelText('Email');
      expect(emailInput).toBeInTheDocument();
    });

    test('has an password input', () => {
      setup();
      const passwordInput = screen.getByLabelText('Password');
      expect(passwordInput).toBeInTheDocument();
      expect(passwordInput.type).toBe('password');
    });

    test('has a confirm password input', () => {
      setup();
      const confirmPasswordInput = screen.getByLabelText('Confirm Password');
      expect(confirmPasswordInput).toBeInTheDocument();
      expect(confirmPasswordInput.type).toBe('password');
    });

    test('should have a register button', () => {
      setup();
      const registerButton = screen.getByRole('button', {
        name: 'Register',
      });
      expect(registerButton).toBeInTheDocument();
    });
    test('sregister user button should be disabled initially', () => {
      setup();
      const registerButton = screen.getByRole('button', {
        name: 'Register',
      });
      expect(registerButton).toBeDisabled();
    });
  });
  describe('Form interactions', () => {
    test('register button should be enabled when password and confirm password are the same', () => {
      setup();
      const passwordInput = screen.getByLabelText('Password');
      const confirmPasswordInput = screen.getByLabelText('Confirm Password');
      const registerButton = screen.getByRole('button', {
        name: 'Register',
        type: 'button',
        value: 'Register',
        disabled: false,
      });
      //act
      userEvent.type(passwordInput, 'password');
      userEvent.type(confirmPasswordInput, 'password');
      userEvent.click(registerButton);

      //assert

      //assert
      expect(registerButton).toBeEnabled();
    });
  });
});
