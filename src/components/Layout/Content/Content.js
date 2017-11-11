import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import About from '../../../containers/About';
import Home from '../../../containers/Home';
import Products from '../../../containers/Products';

export default class Content extends Component{
    render() {
        return(
            <main>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/products' component={Products} />
                </Switch>
            </main>
        )
    }
}