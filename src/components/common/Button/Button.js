import React, {Component} from 'react';
import { Button as ButtonMaterial } from 'material-ui';
import PropTypes from 'prop-types';

export default class Button extends Component {

    static propTypes = {
        text: PropTypes.string,
        color: PropTypes.oneOf(["default","inherit","primary","accent","contrast"]),
        disabled: PropTypes.bool,
        raised: PropTypes.bool,
        onClick: PropTypes.func,
        href: PropTypes.string,
        type: PropTypes.string
    };

    static defaultProps = {
        color: 'primary',
        raised: true
    };

    handleClick = () => {
        if(this.props.onClick) {
            this.props.onClick();
        }
    };

    render() {
        return (
            <div>
                <ButtonMaterial
                    raised={this.props.raised}
                    color={this.props.color}
                    disabled={this.props.disabled}
                    onClick={this.handleClick}
                    href={this.props.href}
                    type={this.props.type}
                    className="ButtonMaterialClass">
                        {this.props.children}
                        {this.props.text}
                </ButtonMaterial>
            </div>
        )
    }
}