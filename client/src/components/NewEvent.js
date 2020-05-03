import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { handleAddEvent } from '../actions/events';
import EventForm from './EventForm';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(8),
    },
}))


const NewEvent = (props) => {
    const classes = useStyles()

    const addEvent = (data) => {
        props.addEvent(data)
        props.history.push('/events')
    }

    return (
        <div className={classes.root}>
            <Typography variant='h2'>New Event</Typography>
            <EventForm onSubmit={addEvent}/>
        </div>
    )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
    addEvent: data => dispatch(handleAddEvent(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewEvent))
