import React from 'react'
import MainNav from './components/MainNav/MainNav'
import MainContent from './components/MainContent/MainContent';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <MainNav />
      <MainContent />
    </div>
  );
}
