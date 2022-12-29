import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  test('button log in should be in the document', () => {
    //Arrange
    render(<Home />);
    const btn = screen.getByRole('button', { name: 'Logga in' });
    //Act
    //Assert
    expect(btn).toBeInTheDocument();
  });

  test('button should initially be green', () => {
    //Arrange
    render(<Home />);
    const btn = screen.getByRole('button', { name: 'Logga in' });
    //Act
    //Assert
    expect(btn).toHaveStyle({ backgroundColor: 'green' });
  });

  test('button should sau log out when is clicked', () => {
    //Arrange
    render(<Home />);
    const btn = screen.getByRole('button', { name: 'Logga in' });
    //act
    fireEvent.click(btn);
    //Assert
    expect(btn).toHaveTextContent('Logga ut');
  });

  test('button should say log out when is clicked', () => {
    //Arrange
    render(<Home />);
    const btn = screen.getByRole('button', { name: 'Logga in' });
    //act
    fireEvent.click(btn);
    //Assert
    expect(btn).toHaveStyle({ backgroundColor: 'red' });
  });
});
