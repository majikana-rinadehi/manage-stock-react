import React from 'react';
import logo from './logo.svg';
import { Login } from './features/login/Login';
import { Header } from './components/Header';
import { CreateUser } from './features/createUser/CreateUser'
import { Home } from './pages/home'
import { ItemEdit } from './features/itemEdit/ItemEdit'
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createUser' element={<CreateUser/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
