import Login from './Login';
import {connect} from 'react-redux';
import {login} from '../../store/user';
import {startLinear} from '../../store/linearDeterminate';

const mapStateToProps = state => ({
    layout: state.app.layout,
    user: state.app.user
});

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user)),
        startLinear: () => dispatch(startLinear())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);