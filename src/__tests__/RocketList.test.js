import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RocketList from '../components/RocketList';

const mockOnClick = jest.fn();

test('renders RocketList component with default props', () => {
  const props = {
    id: '1',
    name: 'Starship',
    description: 'Description of Starship',
    flickrImages: 'url-of-image',
    onClick: mockOnClick,
    reserved: false,
  };

  render(<RocketList {...props} />);
  const rocketNameElement = screen.getByText('Starship'); // Using text content directly
  const descriptionElement = screen.getByText('Description of Starship');
  const reserveButtonElement = screen.getByRole('button', { name: 'Reserve Rocket' });
});

test('renders RocketList component with different rocket data', () => {
  const props = {
    id: '2',
    name: 'Falcon 9',
    description: 'Description of Falcon 9',
    flickrImages: 'url-of-another-image',
    onClick: mockOnClick,
    reserved: true,
  };

  render(<RocketList {...props} />);
  const rocketNameElement = screen.getByText('Falcon 9'); // Using text content directly
  const descriptionElement = screen.getByText('Description of Falcon 9');
  const cancelButtonElement = screen.getByRole('button', { name: 'Cancel Reservation' });
});

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
