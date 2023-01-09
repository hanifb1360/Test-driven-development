import { render, screen } from '@testing-library/react';

import VehicleList from './VehicleList';

describe('VehicleList component', () => {
  const setup = () => render(<VehicleList />);
  describe('should have a page layout', () => {
    test('with a page title', () => {
      // Arrange
      setup();
      const title = screen.getByRole('heading');

      // Act

      // Assert
      expect(title).toBeInTheDocument();
    });

    test('with a title of "Vehicles in storage"', () => {
      // Arrange
      setup();
      const title = screen.getByRole('heading');

      // Act

      // Assert
      expect(title).toHaveTextContent(/Vehicles in Storage/i);
    });
  });
  describe('VehicleList api request', () => {
    test('renders a list of vehicles if request is successful', async () => {
      // Arrange
      setup();

      // Här skapar vi en mock funktion via jest.fn...
      window.fetch = jest.fn();
      window.fetch.mockResolvedValueOnce({
        json: async () => [
          {
            vehicleId: 1859,
            registrationNumber: 'AL73738',
            vinNumber: 'TMBAG9NE6E0061014',
            manufacturer: 'SKODA',
            model: 'OCTAVIA',
            vehicleName: 'SKODA OCTAVIA 1.6 TDI 105 HK Hatchback',
          },
        ],
      });

      const vehicles = await screen.findAllByRole('listitem');
      // Act

      // Assert
      expect(vehicles).not.toHaveLength(0);
    });
  });
});
