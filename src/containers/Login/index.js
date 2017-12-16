import Login from './Login';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        data: state.reducer
    }
};

export default connect(mapStateToProps, null)(Login);