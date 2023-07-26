import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Rockets from '../components/Rockets';
import { fetchRockets, reserveRocket, loadReservedRockets } from '../redux/rockets/rocketsSlice';

const mockStore = configureMockStore([thunk]);

describe('Rockets Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: '1',
            name: 'Rocket 1',
            description: 'Description of Rocket 1',
            image: 'url-of-image-1',
            reserved: false,
          },
          {
            id: '2',
            name: 'Rocket 2',
            description: 'Description of Rocket 2',
            image: 'url-of-image-2',
            reserved: true,
          },
        ],
        loading: 'idle',
      },
    });
  });

  test('renders Rockets component with loading state', () => {
    store = mockStore({
      rockets: {
        rockets: [],
        loading: 'loading',
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders Rockets component with rockets data', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    const rocket1NameElement = screen.getByText('Rocket 1');
    const rocket2NameElement = screen.getByText('Rocket 2');
    expect(rocket1NameElement).toBeInTheDocument();
    expect(rocket2NameElement).toBeInTheDocument();
  });

  test('calls reserveRocket when the reserve button is clicked for an unreserved rocket', async () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    const reserveButtonElement = screen.getByText('Reserve Rocket');
    expect(reserveButtonElement).toBeInTheDocument();

    // Click on the reserve button
    reserveButtonElement.click();

    // Wait for async dispatch to complete
    await waitFor(() =>
      expect(store.dispatch).toHaveBeenCalledWith(reserveRocket('1'))
    );
  });
});
