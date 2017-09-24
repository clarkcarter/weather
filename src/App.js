import React from 'react';
import './App.css';
import Weather from './Weather';

class App extends React.Component {

  render() {
    return (
      <div>
        <Weather location="sydney"/>
      </div>
    )
  }
}

export default App;
