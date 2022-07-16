import React from 'react';
import { useSelector } from 'react-redux';
import Intro from './components/intro/Intro';
import People from './components/people/People';
import Summary from './components/summary/Summary';
import Navbar from './components/_shared/Navbar';
import { fetchPage, Pages } from './store/pageSlice';
import './styles/app.scss';

function App() {

  const currentPage = useSelector(fetchPage)
  return (
    <div className="app">
      <div className="app__content">
        {currentPage === Pages.intro ? <Intro /> : ''}
        {currentPage === Pages.people ? <People /> : ''}
        {currentPage === Pages.summary ? <Summary /> : ''}
      </div>
      <Navbar />
    </div>
  );
}

export default App;
