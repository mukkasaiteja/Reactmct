import React from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Searchdata from './components/Searchdata';
import Sidenav from './components/Sidenav';


function App() {
  return (
    <div>
      <Sidenav/>
     <div className="App">
     <Nav/>
      <div className='main-fun'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Searchdata/>}/>
      </Routes>
      </div>
     </div>
    </div>
  );
}

export default App;
