import React, {Component} from 'react';
import { LinearProgress } from 'material-ui/Progress';

export default class LinearDeterminateContainer extends Component{

    state = {
        completed: 0,
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
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