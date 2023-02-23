import React from 'react';
import './globalStyle.css';
import Header from './features/Header/Header';
import Subreddits from './features/Subreddits/Subreddits';
import Panel from './features/Panel/Panel';
import SearchBar from './features/SearchBar/SearchBar';

function App() {
  return (
    <>
      <Header />
      <Panel />
      <Subreddits />
    </>
  );
}

export default App;
