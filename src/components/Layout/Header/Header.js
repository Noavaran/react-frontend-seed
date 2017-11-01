import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, IconButton} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';

export default class Header extends Component{
    render() {
        return (
            <AppBar position="static" className="testStyled">
                <Toolbar>
                    <IconButton  color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit">
                        موضوع
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}