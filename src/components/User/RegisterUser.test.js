import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import RegisterUser from './RegisterUser';

describe('Register User Component', () => {
  const setup = () => render(<RegisterUser />);

  describe('Register User Page', () => {
    test('has a title text saying "Användar registrering"', () => {
      // Arrange...
      // render(<RegisterUser />);
      setup();
      const titleText = screen.getByRole('heading', {
        name: 'Användar registrering',
      });
      // Act...

      // Assert...
      expect(titleText).toBeInTheDocument();
    });

    test('has an username input', () => {
      // Arrange...
      //   const { container } = render(<RegisterUser />);
      //   const userInput = container.querySelector('input');

      render(<RegisterUser />);
      //   const userInput = screen.getByPlaceholderText('username');
      const userInput = screen.getByLabelText('User Name');
      // Act...

      // Assert...
      expect(userInput).toBeInTheDocument();
    });

    test('has an email input', () => {
      // Arrange...
      render(<RegisterUser />);
      const emailInput = screen.getByLabelText('Email');
      // Act...

      // Assert...
      expect(emailInput).toBeInTheDocument();
    });

    test('has a password input', () => {
      // Arrange...
      render(<RegisterUser />);
      const passwordInput = screen.getByLabelText('Password');
      // Act...

      // Assert...
      expect(passwordInput).toBeInTheDocument();
      expect(passwordInput.type).toBe('password');
    });

    test('has a confirm password input', () => {
      // Arrange...
      render(<RegisterUser />);
      const confirmPasswordInput = screen.getByLabelText('Confirm Password');

      // Act...

      //Assert...
      expect(confirmPasswordInput).toBeInTheDocument();
      expect(confirmPasswordInput.type).toBe('password');
    });

    test('should have a register button', () => {
      // Arrange...
      render(<RegisterUser />);
      const registerButton = screen.getByRole('button', {
        name: /Register User/i,
      });

      // Act...

      // Assert...
      expect(registerButton).toBeInTheDocument();
    });

    test('register user button should be disabled initially', () => {
      // Arrange...
      render(<RegisterUser />);
      const registerButton = screen.getByRole('button', {
        name: 'Register User',
      });

      // Act...

      // Assert...
      expect(registerButton).toBeDisabled();
    });
  });
  describe('Form interactions', () => {
    test('register button should be enabled when password and confirm password are the same', async () => {
      // Arrange...
      setup();
      const passwordInput = screen.getByLabelText('Password');
      const confirmPasswordInput = screen.getByLabelText('Confirm Password');
      const registerButton = screen.getByRole('button', {
        name: 'Register User',
      });

      // Act...
      await userEvent.type(passwordInput, 'Pa$$w0rd');
      await userEvent.type(confirmPasswordInput, 'Pa$$w0rd');

      // Assert...
      expect(registerButton).toBeEnabled();
    });

    test('saves the user when "Register User" is clicked', async () => {
      // Arrange...
      let requestBody;

      // Configure MSW server...
      // Create an endpoint for hijacking post request...
      const server = setupServer(
        rest.post('http://localhost:3010/users', (req, res, context) => {
          req.json().then((data) => (requestBody = data));
          return res(context.status(201));
        }),
      );

      // Start listening
      server.listen();

      setup();
      const userNameInput = screen.getByLabelText('User Name');
      const emailInput = screen.getByLabelText('email', { exact: false });
      const passwordInput = screen.getByLabelText('Password');
      const confirmPasswordInput = screen.getByLabelText('Confirm Password');
      const registerButton = screen.getByRole('button', {
        name: 'Register User',
      });

      // Act...
      await userEvent.type(userNameInput, 'MalinGustavsson');
      await userEvent.type(emailInput, 'malin@gmail.com');
      await userEvent.type(passwordInput, 'Pa$$w0rd');
      await userEvent.type(confirmPasswordInput, 'Pa$$w0rd');

      await userEvent.click(registerButton);

      await new Promise((resolve) => setTimeout(resolve, 500));
      // Assert...
      expect(requestBody).toEqual({
        userName: 'MalinGustavsson',
        email: 'malin@gmail.com',
      });
    });
  });
});
