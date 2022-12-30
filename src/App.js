import MapPage from './pages/MapPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MapPage></MapPage>} />
      <Route
        path='*'
        element={
          <div>
            <h1>NOT FOUND</h1>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
