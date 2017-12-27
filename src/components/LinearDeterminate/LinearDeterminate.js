import React, {Component} from 'react';
import { LinearProgress } from 'material-ui/Progress';

export default class LinearDeterminateContainer extends Component{

    state = {
        completed: 0,
    };

    componentDidMount() {
        if(this.props.start) {
            this.timer = setInterval(this.progress, 500);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.start) {
            this.timer = setInterval(this.progress, 500);
        } else {
            this.setState({completed: 0}, () => {
                if(this.timer){
                    clearInterval(this.timer);
                }
            });
        }
    }

    componentWillUnmount() {
        if(this.timer){
            clearInterval(this.timer);
        }
    }

    timer = '';

    progress = () => {
        const { completed } = this.state;
        if (completed > 10000) {
            this.setState({ completed: 0 });
        } else {
            const diff = Math.random() * 10;
            this.setState({ completed: completed + diff });
        }
    };

    render() {
        if(this.props.start) {
            return (
                <div>
                    <LinearProgress mode="determinate" value={this.state.completed} />
                </div>
            )
        } else {
            return null
        }
    }
}