import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import Icon from '../Icon';
import PropTypes from 'prop-types';

export default class IconButtonContainer extends Component{

    static propTypes = {
        name: PropTypes.string,
        title: PropTypes.string,
        color: PropTypes.oneOf(['accent', 'action', 'contrast', 'disabled', 'primary']),
        disabled: PropTypes.bool,
        onClick: PropTypes.func
    };

    static defaultProps = {
        color: 'primary',
        disabled: false
    };

    handleClick = () => {
        if(this.props.onClick) {
            this.props.onClick()
        }
    };

    render() {
        return(
            <IconButton color={this.props.color} disabled={this.props.disabled} title={this.props.title} onClick={this.handleClick}>
                <Icon name={this.props.name} />
            </IconButton>
        )
    }
}