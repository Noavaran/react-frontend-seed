import React, {Component} from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';
import {required} from '../../utils/fieldLevelValidationForm';

const renderField = ({
                         input,
                         label,
                         type,
                         placeholder,
                         meta: { touched, error, warning }
                     }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
    </div>
);

export default class Input extends Component{

    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string
    };

    static defaultProps = {
        type: 'text'
    };

    render() {
        let validation = [
            this.props.required ? required : undefined
        ];
        validation = validation.filter(item => {
            return typeof item !== 'undefined'
        });
        return (
            <div>
                <Field name={this.props.name} component={renderField} type={this.props.type} validate={validation} label={this.props.label} placeholder={this.props.placeholder}/>
            </div>
        )
    }
}