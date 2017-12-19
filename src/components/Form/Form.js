import React, {Component} from 'react';
import {reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Form extends Component{
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                {this.props.children}
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    form: ownProps.name
});

export default compose(
    connect(mapStateToProps),
    reduxForm({})
)(Form);