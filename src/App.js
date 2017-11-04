import React, { Component } from 'react';
import './App.css';
import {Header, Content, Footer} from './components/Layout';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Content/>
          <Footer />
      </div>
    );
  }
}

export default App;
