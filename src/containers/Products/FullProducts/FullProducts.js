import React, {Component} from 'react';
import ContactForm from '../../../components/Form';
import Input from '../../../components/Input';

export default class FullProducts extends Component{

    submit = values => {
        // print the form values to the console
        console.log(values)
    };

    render() {
        return(
            <div>
                <b>Full products</b><br />
                <ContactForm onSubmit={this.submit} name="contactForm">
                    <Input label='first Name' type='text' name='firstName' required placeholder='نام'/>
                    <Input label='last Name' type='text' name='lastName'/>
                    <Input label='Email' type='email' name='email'/>
                </ContactForm>
            </div>
        )
    }
}