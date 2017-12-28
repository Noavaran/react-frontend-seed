import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';

export default class AvatarContainer extends PureComponent{

    static propTypes = {
        src: PropTypes.string,
        className: PropTypes.string,
        alt: PropTypes.string,
        style: PropTypes.object,
        onClick: PropTypes.func
    };

    static defaultProps = {
        alt: '',
        style: {}
    };

    handleClick = () => {
        if(this.props.onClick) {
            this.props.onClick();
        }
    };

    render() {
        let src = '';
        if(this.props.src) {
            src = this.props.src
        } else if(this.props.pic) {
            src = this.props.pic
        }
        return (
            <div onClick={this.handleClick} style={this.props.style}>
                <Avatar
                    className={this.props.className}
                    alt={this.props.alt}
                    src={src}/>
            </div>
        )
    }
}