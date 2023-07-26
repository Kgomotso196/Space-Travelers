import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Profile from '../components/Profile';
const mockStore = configureMockStore();
describe('Profile Component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            mission_id: 'mission1',
            mission_name: 'Mission 1',
            joined: true,
          },
          {
            mission_id: 'mission2',
            mission_name: 'Mission 2',
            joined: true,
          },
        ],
      },
      rockets: {
        rockets: [
          {
            id: 'rocket1',
            name: 'Rocket 1',
            reserved: true,
          },
          {
            id: 'rocket2',
            name: 'Rocket 2',
            reserved: true,
          },
        ],
      },
    });
  });
  test('renders Profile component correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});