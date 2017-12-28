import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login';
import {connect} from 'react-redux';
// import SocketWatcher from './components/SocketWatcher';
import {hasIn, isEmpty} from 'ramda';
import {withRouter} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Layout from './containers/Layout';
import SnackBars from './components/SnackBars';
import {showSnackBars} from './store/snackbars';

class App extends Component {

    componentWillMount() {
        if(!hasIn('isLogin', this.props.user) || !this.props.user.isLogin) {
            this.props.history.push("/login");
        }
    }

    componentWillReceiveProps(nextProps) {
        if(hasIn('error', nextProps.user) && !isEmpty(nextProps.user.error)) {
            this.props.showSnackBars(nextProps.user.error)
        }
    }

  render() {
      if(!hasIn('isLogin', this.props.user) || !this.props.user.isLogin) {
          return (
              <MuiThemeProvider theme={createMuiTheme({
                  direction: this.props.layout.direction, // Both here and <body dir="rtl">
              })}>
                  <SnackBars />
                  <Login/>
                  {/*<SocketWatcher />*/}
              </MuiThemeProvider>
          )
      } else {
          return (
              <MuiThemeProvider theme={createMuiTheme({
                  direction: this.props.layout.direction, // Both here and <body dir="rtl">
              })}>
                  <SnackBars />
                  <Layout/>
                  {/*<SocketWatcher />*/}
              </MuiThemeProvider>
          )
      }
  }
}

const mapStateToProps = state => {
    return {
        user: state.app.user,
        layout: state.app.layout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showSnackBars: message => dispatch(showSnackBars(message))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
