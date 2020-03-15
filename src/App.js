import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Searchbar } from './components/Searchbar';

import './App.css';

function App() {
  return (
    <div >
      <Header />
      <Searchbar />
    </div>
  );
}

export default App;
