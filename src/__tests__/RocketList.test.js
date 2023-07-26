import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RocketList from '../components/RocketList';

const mockOnClick = jest.fn();

test('calls onClick when the reserve button is clicked for an unreserved rocket', () => {
  const props = {
    id: '1',
    name: 'Starship',
    description: 'Description of Starship',
    flickrImages: 'url-of-image',
    onClick: mockOnClick,
    reserved: false,
  };

  render(<RocketList {...props} />);
  const reserveButtonElement = screen.getByRole('button', { name: 'Reserve Rocket' });
  fireEvent.click(reserveButtonElement);
  expect(mockOnClick).toHaveBeenCalled();
});

test('calls onClick when the cancel button is clicked for a reserved rocket', () => {
  const props = {
    id: '1',
    name: 'Starship',
    description: 'Description of Starship',
    flickrImages: 'url-of-image',
    onClick: mockOnClick,
    reserved: true,
  };

  render(<RocketList {...props} />);
  const cancelButtonElement = screen.getByRole('button', { name: 'Cancel Reservation' });
  fireEvent.click(cancelButtonElement);
  expect(mockOnClick).toHaveBeenCalled();
});
