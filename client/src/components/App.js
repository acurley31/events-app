import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleGetInitialData } from '../actions/shared';
import Nav from './Nav';
import EventList from './EventList';
import NewEvent from './NewEvent';
import EventDetail from './EventDetail';


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetInitialData())
    }

    render() {
        return (
            <BrowserRouter>
                <Nav/>
                <Switch>
                    <Route exact path='/events' component={EventList}/>
                    <Route exact path='/events/new' component={NewEvent}/>
                    <Route exact path='/events/:id' component={EventDetail}/>
                    <Route component={EventList}/>
                </Switch>
            </BrowserRouter>
        )
    }

}
export default connect()(App);
