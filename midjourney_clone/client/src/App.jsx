import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { home, create_post } from './pages';

const App = () => {
  return (
    <Router>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <img src={logo} alt="Logo" className='w-28 object-contain' />
        </Link>
        <Link to='/create_post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>Create</Link>
      </header>
      <Routes>
        <Route path='/' element={<home />} />
        <Route path='/create_post' element={<create_post />} />
      </Routes>
    </Router>
  );
}

export default App;
