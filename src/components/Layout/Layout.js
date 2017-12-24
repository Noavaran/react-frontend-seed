import React, {Component} from 'react';

export default class Layout extends Component{

    componentWillMount() {
        this.props.endLinear();
        this.props.history.push("/");
    }

    render() {
        return (
            <div>Layout</div>
        )
    }
}