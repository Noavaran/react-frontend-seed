import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {addCount, removeCount} from '../../store/data';

class Home extends PureComponent {

    state = {
        val: 0
    };

    handleChangeInput = e => {
        this.setState({val: e.target.value})
    };

    handleClickBtn = mode => {
        let num = Number(this.state.val);
        if(mode === 'add') {
            this.props.addCount(num)
        } else if( mode === 'remove') {
            this.props.removeCount(num);
        }
    };

    render() {
        return(
            <div>Home
                <input type="number" onChange={this.handleChangeInput}/>
                <button type="button" onClick={() => this.handleClickBtn('add')}>Add</button>
                <button type="button" onClick={() => this.handleClickBtn('remove')}>Remove</button><br />
                <b>Reduc count = {this.props.count}</b>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addCount: num => dispatch(addCount(num)),
    removeCount: num => dispatch(removeCount(num))
});

const mapStateToProps = state => ({
    count: state.reducer.app.data.count
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)