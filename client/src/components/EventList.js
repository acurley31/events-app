import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import EventListHeader from './EventListHeader';
import EventTable from './EventTable';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(8),
    },
}))

const EventList = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <EventListHeader />
            <EventTable items={props.events}/>
        </div>
    )
}

const mapStateToProps = ({ events }) => ({
    events: Object.keys(events).map(id => events[id]),
})

export default connect(mapStateToProps)(EventList)
