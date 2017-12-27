import React, {Component} from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import {Icon} from '../../components/common';
import Divider from 'material-ui/Divider';

export default class Menu extends Component{

    state = {
        open: false
    };

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    handleRedirect = url => {
        this.props.history.replace(url);
    };

    render() {
        return (
            <List>
                <ListItem button onClick={() => this.handleRedirect('/')}>
                    <ListItemIcon>
                        <Icon name="home"/>
                    </ListItemIcon>
                    <ListItemText inset primary="صفحه اصلی" />
                </ListItem>
                <Divider />
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                        <Icon name="group"/>
                    </ListItemIcon>
                    <ListItemText inset primary="گروه" />
                    {this.state.open ? <Icon name="keyboard_arrow_up"/> : <Icon name="keyboard_arrow_down"/>}
                </ListItem>
                <Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        <ListItem button style={{paddingRight: 25}} onClick={() => this.handleRedirect('/about')}>
                            <ListItemIcon>
                                <Icon name="person"/>
                            </ListItemIcon>
                            <ListItemText inset primary="درباره ما" />
                        </ListItem>
                    </List>
                </Collapse>
                <Divider />
            </List>
        )
    }
}