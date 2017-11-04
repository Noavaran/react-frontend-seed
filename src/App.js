import React, { Component } from 'react';
import './App.css';
import {Header, Content} from './components/Layout';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Content/>
      </div>
    );
  }
}

export default App;
