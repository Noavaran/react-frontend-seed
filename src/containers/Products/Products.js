import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import FullProducts from './FullProducts';
import ProductDetails from './ProductDetails';

export default class Products extends Component{
    render() {
        return(
            <div>
                <h2>This is Products main page</h2>
                <Switch>
                    <Route exact path='/products' component={FullProducts}/>
                    <Route path='/products/:id' component={ProductDetails}/>
                </Switch>
            </div>
        )
    }
}
