import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabsWrapper from './Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Shringi Kumari</h2>
          <TabsWrapper/>
      </div>
    );
  }
}

export default App;
