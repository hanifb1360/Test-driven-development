import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('button log in should be in the document', () => {
    // Arrange...
    render(<Home />);
    // const { container } = render(<Home />);

    // logRoles(container);

    const btn = screen.getByRole('button', { name: 'Logga In' });

    // Act...
    // Assert...
    expect(btn).toBeInTheDocument();
  });

  test('button should initial be green', () => {
    // Arrange...
    render(<Home />);
    const btn = screen.getByRole('button', { name: 'Logga In' });

    // Act...
    // Assert...
    expect(btn).toHaveStyle({ backgroundColor: 'green' });
  });

  test('button when clicked should say log out', () => {
    // Arrange...
    render(<Home />);
    const btn = screen.getByRole('button', { name: 'Logga In' });

    // Act...
    fireEvent.click(btn);

    // Assert...
    expect(btn).toHaveTextContent('Logga ut');
  });

  test('when button is clicked should be red', () => {
    // Arrange...
    render(<Home />);
    const btn = screen.getByRole('button', { name: 'Logga In' });

    // Act...
    fireEvent.click(btn);

    // Assert...
    expect(btn).toHaveStyle({ backgroundColor: 'red' });
  });
});
