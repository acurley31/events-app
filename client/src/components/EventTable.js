import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4)
    },
    table: {
        minWidth: 650,
    }
}))


const EventTable = (props) => {
    const classes = useStyles()

    if (props.events.length === 0) {
        return (
            <div className={classes.root}>
                <Typography variant='h6'>
                    No events found
                </Typography>
            </div>
        )
    }

    return (
        <TableContainer component={Paper} variant='outlined' className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Year</TableCell>
                        <TableCell>Event Type</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align='right'>Field 1</TableCell>
                        <TableCell align='right'>Field 2</TableCell>
                        <TableCell align='right'>Field 3</TableCell>
                        <TableCell align='right'>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { props.events.map(item => (
                        <TableRow key={item.id} hover>
                            <TableCell>{item.year}</TableCell>
                            <TableCell>{item.event_type}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell align='right'>{item.field1}</TableCell>
                            <TableCell align='right'>{item.field2}</TableCell>
                            <TableCell align='right'>{item.field3}</TableCell>
                            <TableCell align='right'>
                                <IconButton component={Link} to={`/events/${item.id}`} size='small'>
                                    <Edit fontSize='small'/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const mapStateToProps = ({ events }) => ({
    events: Object.keys(events).map(id => events[id]),
})

export default connect(mapStateToProps)(EventTable);
