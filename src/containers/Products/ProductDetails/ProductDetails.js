import React, {Component} from 'react';

export default class ProductDetails extends Component{
    render() {
        return(
            <div>product details for product id: {this.props.match.params.id}</div>
        )
    }
}