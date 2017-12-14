import React, {Component} from 'react';
import {reduxForm } from 'redux-form';

class ContactForm extends Component{
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                {this.props.children}
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'form'
})(ContactForm)