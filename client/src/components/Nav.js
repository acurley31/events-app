import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    navLink: {
        marginLeft: 'auto',
        color: theme.palette.primary.contrastText,
    },
}))


const Nav = (props) => {
    const classes = useStyles()

    return (
        <AppBar position='sticky' variant='outlined'>
            <Toolbar>
                <Typography variant='h6'>Events Tracker</Typography>
                <Button component={NavLink} to='/events' className={classes.navLink}>
                    Events
                </Button>
            </Toolbar>
        </AppBar>
    )
}
export default Nav

