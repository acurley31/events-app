import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetInitialData } from '../actions/shared';


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetInitialData())
    }

    render() {
        return (
            <div>App</div>
        )
    }

}
export default connect()(App);
