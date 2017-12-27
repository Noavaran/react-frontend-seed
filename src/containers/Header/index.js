import Header from './Header';
import {logout} from '../../store/user';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(null, mapDispatchToProps)(Header);