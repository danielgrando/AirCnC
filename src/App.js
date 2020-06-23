import React from 'react';
import './App.css';
import Routes from './routes';

import Logo from './assets/logo.svg';

function App() {

  return (
    <div className="container">
      <img src={Logo} alt="AirCnC" />
      <div className="content">
        <Routes />

      </div>
    </div>
  );
}
export default App;
