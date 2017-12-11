import React, {Component} from 'react';
import {connect} from 'react-redux';

class About extends Component{
    render() {
        return(
            <div>About
                <b>Redux Count = {this.props.count}</b>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.app.data.count
});

export default connect(mapStateToProps, null)(About)