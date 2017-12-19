import React, { Component } from 'react';
import './App.css';
import {Header, Content, Footer} from './components/Layout';
import Login from './containers/Login';
import styled from 'styled-components';
import {connect} from 'react-redux';
// import SocketWatcher from './components/SocketWatcher';
import {hasIn} from 'ramda';
import {withRouter} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

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

    componentWillMount() {
        if(!hasIn('isLogin', this.props.user) || !this.props.user.isLogin) {
            this.props.history.push("/login");
        }
    }

  render() {
      if(!hasIn('isLogin', this.props.user) || !this.props.user.isLogin) {
          return (
              <MuiThemeProvider theme={createMuiTheme({
                  direction: this.props.layout.direction, // Both here and <body dir="rtl">
              })}>
                  <Login/>
              </MuiThemeProvider>
          )
      } else {
          return (
              <StyledDiv>
                  <Header className="header"/>
                  <Content className="main"/>
                  <Footer className="footer" />
                  {/*<SocketWatcher />*/}
              </StyledDiv>
          );
      }
  }
}

const mapStateToProps = state => {
    return {
        user: state.reducer.app.user,
        layout: state.reducer.app.layout
    }
};

export default withRouter(connect(mapStateToProps, null)(App));
