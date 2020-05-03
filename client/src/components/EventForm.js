import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = (theme) => ({
    textField: {
        marginTop: theme.spacing(4),
    },
    actions: {
        marginTop: theme.spacing(4),
        display: 'flex',
        justifyContent: 'flex-end',
    },
    actionButton: {
        marginLeft: theme.spacing(2),
    },
})


class EventForm extends Component {

    constructor(props) {
        super(props)
        if (props.data) {
            this.state = {...props.data}
        } else {
            this.state = {
                year: '',
                event_type: '',
                description: '',
                field1: '',
                field2: '',
                field3: '',
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.data && prevProps.data !== this.props.data) {
            this.setState({ ...this.props.data })
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    onDelete = (e) => {
        e.preventDefault()
        const id = this.props.data ? this.props.data.id : null
        if (id && this.props.onDelete) {
            this.props.onDelete(this.props.data)
        }
    }

    render() {
        const { classes } = this.props

        return (
            <form onSubmit={this.onSubmit} autoComplete='off'>
                <TextField
                    variant='filled'
                    fullWidth
                    value={this.state.year}
                    onChange={(e) => this.setState({year:e.target.value})}
                    label='Year'
                    required
                    className={classes.textField}
                />

                <TextField
                    variant='filled'
                    fullWidth
                    value={this.state.event_type}
                    onChange={(e) => this.setState({event_type: e.target.value})}
                    label='Event Type'
                    required
                    className={classes.textField}
                />
        
                <TextField
                    variant='filled'
                    fullWidth
                    multiline
                    rows={4}
                    value={this.state.description}
                    onChange={(e) => this.setState({description: e.target.value})}
                    label='Description'
                    required
                    className={classes.textField}
                />

                <TextField
                    variant='filled'
                    fullWidth
                    value={this.state.field1}
                    onChange={(e) => this.setState({field1: e.target.value})}
                    label='Field 1'
                    type='number'
                    required
                    className={classes.textField}
                />

                <TextField
                    variant='filled'
                    fullWidth
                    value={this.state.field2}
                    onChange={(e) => this.setState({field2: e.target.value})}
                    label='Field 2'
                    type='number'
                    required
                    className={classes.textField}
                />

                <TextField
                    variant='filled'
                    fullWidth
                    value={this.state.field3}
                    onChange={(e) => this.setState({field3: e.target.value})}
                    label='Field 3'
                    type='number'
                    required
                    className={classes.textField}
                />

                <div className={classes.actions}>
                    <Button
                        variant='outlined'
                        color='secondary'
                        onClick={this.onDelete}
                        disableElevation
                        className={classes.actionButton}
                        disabled={!this.props.onDelete}
                    >
                        Delete
                    </Button>

                    <Button 
                        variant='contained'
                        color='primary'
                        type='submit'
                        disableElevation
                        className={classes.actionButton}
                    >
                        Save
                    </Button>
                </div>
            </form>
        )
    }
}

EventForm.propTypes = {
    data: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles, { withTheme: true })(EventForm);
