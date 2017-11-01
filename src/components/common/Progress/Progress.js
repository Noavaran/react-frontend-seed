import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';

export default class Progress extends Component{

    static PropTypes = {
        size: PropTypes.number,
        style: PropTypes.object,
        color: PropTypes.oneOf(['primary', 'accent', 'inherit'])
    };

    static defaultProps = {
        size: 50,
        style: {},
        color: 'primary'
    };

    render() {
        return(
            <CircularProgress size={this.props.size} style={this.props.style} color={this.props.color}/>
        )
    }
}