import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import * as Actions from '../actions';
import Header from '../components/Header';
import Summary from './Summary';
import { Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler, hashHistory} from 'react-router';
const url = "http://localhost:9090/public/api/entries.json";

class App extends React.Component {

    constructor(){
        super();
    }

    componentDidMount () {
        this.props.fetchEntries(url);
    }

    render() {
        const props = this.props;
        return (<div>
            <Header />
            <Summary {...props}/>
        </div>);
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
