import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'; // Import the Home component
// ... other imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/>} /> {/* Define the route for the home page */}
        {/* Add routes for other pages/components here */}
      </Routes>
    </Router>
  );
}

export default App;
