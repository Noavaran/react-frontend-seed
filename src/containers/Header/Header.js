import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

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
        open: this.props.open
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

    render() {
        const { classes } = this.props;
        return (
            <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                <Toolbar disableGutters={!this.state.open}>
                    <IconButton
                        color="contrast"
                        aria-label="open drawer"
                        onClick={this.handleDrawerOpen}
                        className={classNames(classes.menuButton, this.state.open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" noWrap>
                        منو
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Header);