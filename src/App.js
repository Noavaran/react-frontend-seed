import React, { Component } from 'react';
import './App.css';
import Grid from 'material-ui/Grid';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Content from './components/Layout/Content';

class App extends Component {

  render() {
    return (
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
                <Header />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
                <Content/>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
                <Footer/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default App;
