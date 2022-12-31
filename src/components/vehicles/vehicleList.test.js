import { render, screen, logRoles } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VehicleList from './VehicleList';

describe('VehicleList', () => {
  const setup = () => render(<VehicleList />);
  describe('Should have a page layout', () => {
    test('whith a page title', () => {
      setup();
      const title = screen.getByRole('heading');

      expect(title).toBeInTheDocument();
    });
  });

  test('with a title of "vehicles in storage"', () => {
    setup();
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Vehicles in Storage');
  });
  describe('VehicleList api request', () => {
    test('should render the vehicle list if request is successful', async () => {
      // Arrange
      setup();

      // mock function via jest.fn
      window.fetch = jest.fn();
      window.fetch.mockResolvedValueOnce({
        json: async () => [
          {
            vehicleId: 1848,
            registrationNumber: 'AR27966',
            vinNumber: 'TMBJE73T0F9025084',
            manufacturer: 'SKODA',
            model: 'SUPERB',
            vehicleName: 'SKODA, SUPERB',
          },
        ],
      });
      const vehicles = await screen.findAllByRole('listitem');
      //Act

      //Assert
      expect(vehicles).not.toHaveLength(0);
    });
  });
});
