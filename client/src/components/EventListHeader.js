import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GetApp from '@material-ui/icons/GetApp';
import Add from '@material-ui/icons/Add';
import { EventSummariesAPI } from '../utils/api';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        marginRight: 'auto',
    },
    actionButton: {
        marginLeft: theme.spacing(2),
    },
}))


const EventListHeader = (props) => {
    const classes = useStyles()

    const downloadSummary = (e) => {
        e.preventDefault()
        EventSummariesAPI.addEventSummary()
            .then(res => {
                const a = document.createElement('a')
                a.href = res.data.summary_file
                a.download = true
                a.style.display = 'none'
                
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
            })
    }
    
    return (
        <header className={classes.root}>
            <Typography variant='h2' className={classes.title}>
                Events List
            </Typography>

            <Button
                variant='outlined'
                size='small'
                className={classes.actionButton}
                onClick={downloadSummary}
                startIcon={<GetApp/>}
            >
                Download Summary
            </Button>

            <Button
                variant='contained'
                size='small'
                color='secondary'
                className={classes.actionButton}
                component={Link}
                to='/events/new'
                startIcon={<Add/>}
                disableElevation
            >
                Add Event
            </Button>
        </header>
    )
}
export default EventListHeader;
