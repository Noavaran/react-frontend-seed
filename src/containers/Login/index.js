import Login from './Login';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    layout: state.reducer.app.layout
});

export default connect(mapStateToProps, null)(Login);