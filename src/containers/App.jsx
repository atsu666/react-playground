import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import * as Actions from '../actions';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/Link';

import EntryCard from '../components/EntryCard';
const url = "http://localhost:9090/webpack-dev-server/public/api/entries.json";

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
            <AppBar title='React Playground' leftIcon='menu'>
                <Navigation type='horizontal'>
                    <Link href='http://' label='Inbox' icon='inbox' />
                    <Link href='http://' active label='Profile' icon='person' />
                </Navigation>
            </AppBar>
            <div className="container" style={{padding:"15px"}}>
                <div className="row">
                    {props.entries.map(item => {
                        <div className="col-md-4">
                            <div style={{paddingBottom:"15px"}}>
                                <EntryCard props={item}/>
                            </div>
                        </div>
                    })}
                </div>
            </div>
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
