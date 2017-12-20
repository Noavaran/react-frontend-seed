/*
*
let beforeAdornment = {
         type: 'iconButton',
         name: 'star',
         color: 'accent',
         onClick: this.beforeFunc
     };
 let afterAdornment = {
         type: 'iconButton',
         name: 'star',
         color: 'accent',
         onClick: this.afterFunc
     };
*
* */

import React, {Component} from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';
import {required} from '../../utils/fieldLevelValidationForm';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import {Icon, IconButton} from '../common';

export default class InputContainer extends Component{

    static propTypes = {
        label: PropTypes.string,
        hint: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        beforeInput: PropTypes.shape({
            type: PropTypes.oneOf(['text', 'icon', 'iconButton']),
            name: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            color: PropTypes.string,
            onClick: PropTypes.func
        }),
        afterInput: PropTypes.shape({
            type: PropTypes.oneOf(['text', 'icon', 'iconButton']),
            name: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            color: PropTypes.string,
            onClick: PropTypes.func
        }),
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    };

    static defaultProps = {
        type: 'text',
        disabled: false,
        value: ''
    };

    state = {
        value: this.props.value
    };

    renderHint = () => {
        if(this.props.hint) {
            return (
                <FormHelperText style={{textAlign: 'right'}}>{this.props.hint}</FormHelperText>
            )
        } else {
            return null
        }
    };

    renderError = error => {
        if(error) {
            return (
                <FormHelperText style={{textAlign: 'right'}}>{error}</FormHelperText>
            )
        } else {
            return null
        }
    };

    handleClickAdornmentIconButton = (adornment) => {
        if(this.props[adornment].onClick) {
            this.props[adornment].onClick();
        }
    };

    renderAdornment = (adornment) => {
        if(this.props[adornment]) {
            if(this.props[adornment].type === 'text') {
                return (
                    <InputAdornment>{this.props[adornment].name}</InputAdornment>
                )
            } else if(this.props[adornment].type === 'icon') {
                return (
                    <Icon name={this.props[adornment].name} color={this.props[adornment].color}/>
                )
            } else if(this.props[adornment].type === 'iconButton') {
                return (
                    <IconButton name={this.props[adornment].name} color={this.props[adornment].color} onClick={() => this.handleClickAdornmentIconButton(adornment)}/>
                )
            } else {
                return null
            }
        } else {
            return null;
        }
    };

    handleChange = e => {
        this.setState({ value: e.target.value}, () => {
            if(this.props.onChange) {
                this.props.onChange();
            }
        });
    };

    renderField = ({
        input,
        label,
        type,
        meta: { touched, error, warning }
        }) => {
        return (
            <div>
                <FormControl fullWidth disabled={this.props.disabled} error={touched && error && true}>
                    <InputLabel className='inputLabelMaterial' style={{left: 'initial'}}>{label}</InputLabel>
                    <Input className='inputMaterial'
                           startAdornment={this.renderAdornment('beforeInput')}
                           endAdornment={this.renderAdornment('afterInput')}
                           {...input}
                           value={this.state.value}
                           placeholder={this.props.placeholder} />
                    {this.renderHint()}
                    {this.renderError(error)}
                </FormControl>
            </div>
        )
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
                <Field
                    name={this.props.name}
                    component={this.renderField}
                    type={this.props.type}
                    validate={validation}
                    onChange={this.handleChange}
                    label={this.props.label}/>
            </div>
        )
    }
}