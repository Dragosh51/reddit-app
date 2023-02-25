import React from 'react';
import './globalStyle.css';
import Header from './features/Header/Header';
import Subreddits from './features/Subreddits/Subreddits';
import Panel from './features/Panel/Panel';
import SearchBar from './features/SearchBar/SearchBar';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="mediaBox">
      <Subreddits />
      <Panel />
      </div>
    </>
  );
}

export default App;
