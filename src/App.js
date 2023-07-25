import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import MissionList from './components/MissionList';
import RocketList from './components/RocketList';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router> {}
        <>
          <NavBar />
          <main>
            <Routes>
              <Route path="/rockets" element={<RocketList />} />
              <Route path="/" element={<Profile />} />
              <Route path="/missions" element={<MissionList />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </>
      </Router>
    </Provider>
  );
}

export default App;
