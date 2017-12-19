import React, {Component} from 'react';
import {Icon as IconMaterial} from 'material-ui';
import PropTypes from 'prop-types';

export default class Icon extends Component {

    static propTypes = {
        name: PropTypes.string,
        color: PropTypes.oneOf(['accent', 'action', 'contrast', 'disabled', 'primary', 'error']),
        size: PropTypes.number
    };

    render() {
        return (
            <div>
                <IconMaterial color={this.props.color} style={{fontSize: this.props.size}}>{this.props.name}</IconMaterial>
            </div>
        )
    }
}