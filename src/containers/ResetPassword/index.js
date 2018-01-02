import ResetPassword from './ResetPassword';
import {connect} from 'react-redux';
import {login} from '../../store/user';
import {startLinear} from '../../store/linearDeterminate';
import {showSnackBars} from '../../store/snackbars';

const mapStateToProps = state => ({
    layout: state.app.layout,
    user: state.app.user,
    translate: state.app.layout.data
});

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user)),
        startLinear: () => dispatch(startLinear()),
        showSnackBars: message => dispatch(showSnackBars(message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);