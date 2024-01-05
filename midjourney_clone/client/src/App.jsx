import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { home, create_post } from './pages';

const App = () => {
  return (
    <Router>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
            
        </Link>
        <Link to='/create_post' className='font-inter font-medium bg-[#454ad4] text-white px-4 py-2 rounded-md'>Create</Link>
      </header>
    </Router>
  );
}

export default App;
