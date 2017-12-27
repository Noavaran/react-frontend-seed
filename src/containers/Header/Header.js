import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import {Icon} from '../../components/common';
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
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    }
});

class Header extends Component{

    state = {
        open: this.props.open,
        anchorEl: null,
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.open !== this.state.open) {
            this.setState({open: nextProps.open});
        }
    }

    handleDrawerOpen = () => {
        this.setState({ open: true }, () => {
            if(this.props.isOpen) {
                this.props.isOpen(this.state.open);
            }
        });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = flag => {
        this.setState({ anchorEl: null }, () => {
            if(flag === 'exit') {
                this.props.logout();
            }
        });
    };

    render() {
        const { classes } = this.props;
        const open = Boolean(this.state.anchorEl);
        return (
            <div>
                <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="contrast"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, this.state.open && classes.hide)}>
                            <MenuIcon />
                        </IconButton>
                        <div style={{position: 'absolute', left: 0}}>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="contrast">
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={this.state.anchorEl}
                                open={open}
                                onClose={this.handleClose}>
                                <MenuItem onClick={this.handleClose}> پروفایل <Icon name="person" /></MenuItem>
                                <MenuItem onClick={() => this.handleClose('exit')}> خروج <Icon name="exit_to_app" /></MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Header);