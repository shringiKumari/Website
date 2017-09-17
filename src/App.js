import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* < img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Shringi Kumari</h2>
        </div>
        <div className="App-test">
        <a href="#home">About</a> 
          <a href="#home">UnderWater Madhuban</a>
          <a href="#home">Words</a> 
          <a href="#home">Games</a> 
        </div>

        <div class="tab">
          <button class="tablinks" onclick="openCity(event, 'About')">London</button>
          <button class="tablinks" onclick="openCity(event, 'Underwater Madhuban')">Paris</button>
          {/* <button class="tablinks" onclick="openCity(event, 'Words')">Tokyo</button> */}
        </div>

        <div id="About" class="tabcontent">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>

        <div id="Underwater Madhuban" class="tabcontent">
          <h3>Paris</h3>
          <p>Paris is the capital city of England.</p>
        </div>

      
      </div>
    );
  }
}

export default App;
