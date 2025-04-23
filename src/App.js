import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import User from './pages/User';

function App() {
 
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      {/* : user id fetch data from specific id  */}
      <Route path=':userId' element={<User />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
 