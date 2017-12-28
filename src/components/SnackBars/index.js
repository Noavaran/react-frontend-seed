import SnackBars from './SnackBars';
import {connect} from 'react-redux';
import {hideSnackBar} from '../../store/snackbars';

const mapDispatchToProps = dispatch => {
    return {
        hideSnackBar: () => dispatch(hideSnackBar())
    }
};

const mapStateToProps = state => {
    return {
        snackBar: state.app.snackBars
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackBars)