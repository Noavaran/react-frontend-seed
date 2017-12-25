import Layout from './Layout';
import {connect} from 'react-redux';
import {endLinear} from '../../store/linearDeterminate';
import {withRouter} from "react-router-dom";

const mapDispatchToProps = dispatch => {
    return {
        endLinear: () => dispatch(endLinear())
    }
};

export default withRouter(connect(null, mapDispatchToProps)(Layout));