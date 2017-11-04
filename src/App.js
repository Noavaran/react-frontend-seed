import React, { Component } from 'react';
import './App.css';
import {Header, Content, Footer} from './components/Layout';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;  
    flex-flow: row wrap;
    * {
      padding: 10px;
      flex: 1 100%;
    }
    
    div.header {
      background: tomato;
    }
    
    .footer {
      background: lightgreen;
    }
    
    .main {
      text-align: left;
      background: deepskyblue;
    }
    
    @media all and (min-width: 800px) {
      .main{ flex: 3 0px; }
      .main{ order: 2; }
      .footer{ order: 4; }
    }
`;

class App extends Component {
  render() {
    return (
      <StyledDiv>
          <Header className="header"/>
          <Content className="main"/>
          <Footer className="footer" />
      </StyledDiv>
    );
  }
}

export default App;
