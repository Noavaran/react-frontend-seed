import {connect} from 'react-redux';
import LinearDeterminate from './LinearDeterminate';

const mapStateToProps = state => {
    return {
        start: state.app.linearDeterminate.start
    }
};
export default connect(mapStateToProps, null)(LinearDeterminate)