import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabsWrapper from './Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>Lapse .</p>
          <TabsWrapper/>
      </div>
    );
  }
}

export default App;
