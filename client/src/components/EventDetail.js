import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { handleUpdateEvent, handleDeleteEvent } from '../actions/events';
import EventForm from './EventForm';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(8),
    },
}))


const EventDetail = (props) => {
    const classes = useStyles()

    const updateEvent = (data) => {
        props.updateEvent(data)
        props.history.push('/events')
    }

    const deleteEvent = (data) => {
        props.deleteEvent(data)
        props.history.push('/events')
    }

    return (
        <div className={classes.root}>
            <Typography variant='h2'>Update Event</Typography>
            <EventForm 
                data={props.data}
                onSubmit={updateEvent} 
                onDelete={deleteEvent}
            />
        </div>
    )
}

const mapStateToProps = ({ events }, { match }) => {
    const id = match.params.id
    return {
        data: events[id]
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateEvent: data => dispatch(handleUpdateEvent(data)),
    deleteEvent: data => dispatch(handleDeleteEvent(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventDetail))
