import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

export default class SnackBarContainer extends Component{

    static propTypes = {
        message: PropTypes.string,
        open: PropTypes.bool
    };

    static defaultProps = {
        open: false,
        message: ''
    };

    state = {
        message: this.props.message,
        open: this.props.open
    };

    componentWillReceiveProps(nextProps) {
        if(this.state.open !== nextProps.snackBar.open) {
            this.setState({open: nextProps.snackBar.open, message: nextProps.snackBar.message}, () => {
                setTimeout(() => {
                    this.props.hideSnackBar();
                }, 3000);
            });
        }
    }

    // handleClose = () => {
    //     this.setState({open: false}, () => {
    //
    //     });
    // };

    render() {
        return (
            <div style={{direction: 'rtl'}}>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={this.state.open}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.message}</span>} />
            </div>
        )
    }
}