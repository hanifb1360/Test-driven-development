import { screen, render } from '@testing-library/react';
import UserList from './UserList';

describe('UserList component', () => {
  const setup = () => render(<UserList />);

  describe('UserList page', () => {
    test('should have a title "Users"', () => {
      // Arrange
      setup();
      const title = screen.getByRole('heading');

      // Act

      // Assert
      expect(title).toHaveTextContent(/users/i);
    });
  });

  describe('UserList request', () => {
    test('should return a list of users', async () => {
      // Arrange
      setup();

      const users = await screen.findAllByRole('listitem');
      // Act

      // Assert
      expect(users).not.toHaveLength(0);
    });
  });
});
