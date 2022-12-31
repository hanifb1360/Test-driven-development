import { render, screen } from '@testing-library/react';
import App from './App';

describe('Routing', () => {
  const setup = () => render(<App />);
  test.each`
    path       | componentTestId
    ${'/'}     | ${'vehicle-list-component'}
    ${'users'} | ${'users-list-component'}
  `('rdisplay ??? when path is ???', () => {
    setup();

    // Arrange...
    // Act...
    // Assert...
  });
});
