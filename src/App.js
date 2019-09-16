import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './components/Main'

class App extends component {
  state = {
    beers: []
  }

  componentDidMount () {
console.log('test')
  }
  render() {
    return (
    <div className='App'>
      <Main/>
    </div>
    );
  }
}


export default App;

import React from 'react';
import Beers from './Beers';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Beers/>

      </header>
    </div>
  );
}

export default App;
