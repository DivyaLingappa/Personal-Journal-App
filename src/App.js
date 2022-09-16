import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Journals from './components/Journals';
import Description from './components/Description';

const App = () => {
  return (
    <BrowserRouter>
    <Fragment>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/journals' element={<Journals />} />
      <Route path='/description' element={<Description />} />
    </Routes> 
    </Fragment>
    </BrowserRouter>
  );
}

export default App;


