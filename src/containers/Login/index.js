import Login from './Login';
import {connect} from 'react-redux';
import {login} from '../../store/user';

const mapStateToProps = state => ({
    layout: state.app.layout
});

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);