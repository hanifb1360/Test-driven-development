import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('Routing', () => {
  const setup = () => render(<App />);

  test('navigating and rendering correct component', async () => {
    //Arrange
    setup();
    // const user = userEvent.setup();

    // Test if we are on startpage...
    expect(screen.getByText('Vehicles in storage')).toBeInTheDocument();

    // Test if navigate to Users page/component works...
    await userEvent.click(screen.getByText('Users'));
    expect(screen.getByText('Users')).toBeInTheDocument();

    // Test if navigate to Add users page/component works...
    await userEvent.click(screen.getByText('Add users'));
    expect(screen.getByText('Register User')).toBeInTheDocument();
  });
});

// describe('Routing', () => {
//   const setup = () => render(<App />);
//   test.each`
//     path          | componentTestId
//     ${'/'}        | ${'vehicle-list-component'}
//     ${'/users'}   | ${'user-list-component'}
//     ${'/adduser'} | ${'add-user-component'}
//   `(
//     'display $componentTestId when path is $path',
//     ({ path, componentTestId }) => {
//       // Arrange
//       window.history.pushState({}, '', path);
//       setup();
//       const elem = screen.queryByTestId(componentTestId);

//       // Assert
//       expect(elem).toBeInTheDocument();
//     },
//   );

//   test.each`
//     path          | componentTestId
//     ${'/'}        | ${'user-list-component'}
//     ${'/users'}   | ${'vehicle-list-component'}
//     ${'/adduser'} | ${'vehicle-list-component'}
//     ${'/adduser'} | ${'user-list-component'}
//   `(
//     'does not display $componentTestId when path is $path',
//     ({ path, componentTestId }) => {
//       // Arrange
//       window.history.pushState({}, '', path);
//       setup();
//       const elem = screen.queryByTestId(componentTestId);

//       // Assert
//       expect(elem).not.toBeInTheDocument();
//     },
//   );
// });
