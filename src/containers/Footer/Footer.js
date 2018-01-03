import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import styled from 'styled-components';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        position: 'absolute',
        zIndex: theme.zIndex.navDrawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginRight: drawerWidth,//for direction for rtl
        // marginLeft: drawerWidth,//for direction ltr
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }
});

const StyledDiv = styled.div`
    .viewFooter{
        position: absolute;
        left: 50%;
        font-family: BKoodakBold, Arial, Helvetica, sans-serif !important;
    }
`;

class Footer extends Component{

    state = {
        open: this.props.open
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open) {
            this.setState({open: nextProps.open});
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <StyledDiv>
                <AppBar className={`${classNames(classes.appBar, this.state.open && classes.appBarShift)} footerClassName`}>
                    <Toolbar disableGutters={!this.state.open}>
                        <div className="viewFooter">
                            نوآوران
                        </div>
                    </Toolbar>
                </AppBar>
            </StyledDiv>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Footer);