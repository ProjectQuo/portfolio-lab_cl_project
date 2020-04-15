import React from 'react';
import logo from './logo.svg';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <div>{Home}</div> */}
      <Home/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Why Routing here?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ale to jest powalone!
        </a>
      </header>
  
    </div>
  );
}

export default App;
