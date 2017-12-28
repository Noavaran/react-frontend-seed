import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import styled from 'styled-components';
import Menu from '../Menu';
import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';
import {Icon} from '../../components/common';

const drawerWidth = 240;

const StyledDiv = styled.div`
    header.footerClassName{
        top: initial !important;
        bottom: 0 !important;
    }
`;

const styles = theme => ({
    root: {
        width: '100%',
        height: '100vh',
        marginTop: 0,
        zIndex: 1,
        overflow: 'hidden',
        direction: 'rtl'//for direction
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        width: 50,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerInner: {
        // Make the items inside not wrap when transitioning:
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: 24,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
});

class Layout extends Component {
    state = {
        open: false,
    };

    componentWillMount() {
        this.props.endLinear();
        this.props.history.push("/");
    }

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleIsOpen = open => {
        this.setState({open});
    };

    render() {
        const { classes, theme } = this.props;
        return (
            <StyledDiv className={classes.root}>
                <div>
                    <Footer open={this.state.open}/>
                </div>
                <div className={classes.appFrame}>
                    <Header open={this.state.open} isOpen={this.handleIsOpen}/>
                    <Drawer
                        type="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}>
                        <div className={classes.drawerInner}>
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={this.handleDrawerClose}>
                                    {theme.direction === 'rtl' ? <Icon name="chevron_right"/> : <Icon name="chevron_left"/>}
                                </IconButton>
                            </div>
                            <Divider />
                            <Menu />
                        </div>
                    </Drawer>
                    <main className={classes.content}>
                        <Content/>
                    </main>
                </div>
            </StyledDiv>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);