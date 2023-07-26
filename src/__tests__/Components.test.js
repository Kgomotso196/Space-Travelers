import React from 'react';
import { render } from '@testing-library/react';
import MissionList from '../components/MissionList';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Rockets from '../components/Rockets';
import Profile from '../components/Profile';
import NavBar from '../components/NavBar';

describe('Component testing', () => {
  test('Mission list should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <MissionList />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Rocket list should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Profile should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Profile />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('NavBar should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
