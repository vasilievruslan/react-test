import React from 'react';
import Numbers from './components/Numbers';
import Pinger from './components/Pinger';
import './assets/App.css';

function App() {

  return (
    <div className="App">
      <main className="d-flex flex-column vh-100">
        <div className="m-auto d-flex">
          <Numbers/>
          <Pinger/>
        </div>
      </main>

    </div>
  );
}

export default App;
