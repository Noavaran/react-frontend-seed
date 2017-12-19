import React, {Component} from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';
import {required} from '../../utils/fieldLevelValidationForm';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import {Icon, IconButton} from '../common';


// startAdornment={<IconButton name="star"/>}

// const renderField = ({
//     input,
//     label,
//     type,
//     placeholder,
//     hint,
//     meta: { touched, error, warning }
//  }) => (
//     <div>
//         <FormControl fullWidth>
//             <InputLabel className='inputLabelMaterial' style={{left: 'initial'}}>{label}</InputLabel>
//             <Input className='inputMaterial' endAdornment={<InputAdornment position="end">Kg</InputAdornment>}  />
//             <FormHelperText style={{textAlign: 'right'}}>{hint}</FormHelperText>
//         </FormControl>
//         {/*<label>{label}</label>*/}
//         {/*<div>*/}
//             {/*<input {...input} placeholder={placeholder} type={type} />*/}
//             {/*{touched &&*/}
//             {/*((error && <span>{error}</span>) ||*/}
//             {/*(warning && <span>{warning}</span>))}*/}
//         {/*</div>*/}
//     </div>
// );

export default class InputContainer extends Component{

    static propTypes = {
        label: PropTypes.string,
        hint: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        startAdornment: PropTypes.bool

    };

    static defaultProps = {
        type: 'text'
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

    renderEndAdornment = () => {
        {/*<InputAdornment position="end">Kg</InputAdornment>*/}
        {/*<IconButton name="star"/>*/}
        {/*<Icon />*/}
        if(this.props.endAdornment) {
            return (<InputAdornment position="end">Kg</InputAdornment>)
        } else {
            return null
        }
    };

    renderField = ({
        input,
        label,
        type,
        meta: { touched, error, warning }
        }) => {
        return (
            <div>
                <FormControl fullWidth>
                    <InputLabel className='inputLabelMaterial' style={{left: 'initial'}}>{label}</InputLabel>
                    <Input className='inputMaterial' startAdornment={<IconButton name="star"/>} endAdornment={this.renderEndAdornment()} placeholder={this.props.placeholder} />
                    {this.renderHint()}
                </FormControl>
                {/*<label>{label}</label>*/}
                {/*<div>*/}
                {/*<input {...input} placeholder={placeholder} type={type} />*/}
                {/*{touched &&*/}
                {/*((error && <span>{error}</span>) ||*/}
                {/*(warning && <span>{warning}</span>))}*/}
                {/*</div>*/}
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
                    label={this.props.label}
                    />
            </div>
        )
    }
}