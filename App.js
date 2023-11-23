import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Layout';
import Logout from './Pages/Logout';
import User from './Pages/User';
import Error from './Pages/Error';
import Login from './Pages/Login';
import Signup from './Pages/Sign';
import Admin from './Pages/Admin';
import Contact from './Pages/Contact';
import Data from './Pages/Data';
import Edit from './Pages/Edit';
import Reg from './Pages/Register';

function App() {
  return (
    <div className="App">
      <h1>Periyar University</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Login />} />
            <Route path='/user' element={<User />} />
            <Route path='/logout' element={<Logout />} />
            <Route path="*" element={<Error />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Data' element={<Data />} />
            <Route path='/Edit' element={<Edit />} />
            <Route path='/Login' element={<Login />} />
           < Route path='/Home' element={<Home />} />
           <Route path='/Reg' element={<Reg />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;