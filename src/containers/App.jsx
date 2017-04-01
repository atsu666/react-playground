import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import * as Actions from '../actions';
import Header from '../components/Header';
import Summary from './Summary';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import ToolboxLink from 'react-toolbox/lib/Link';
const url = "http://localhost:9090/public/api/entries.json";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class App extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchEntries(url);
    }

    render() {
        const props = this.props;
        return (
            <Router>
                <div>
                    <AppBar title='React Playground' leftIcon='menu'>
                        <Navigation type='horizontal'>
                            <ToolboxLink><Link to="/public/index.html">Home</Link></ToolboxLink>
                            <ToolboxLink><Link to="/public/news">News</Link></ToolboxLink>
                            {/*<Link href='http://' active label='Profile' icon='person' />*/}
                        </Navigation>
                    </AppBar>
                    <Route exact path="/public/index.html" render={() => {
                        return (<Summary {...props}/>);
                    }}/>
                    <Route path="/public/news" render={() => {
                        return (<div>hoge</div>);
                    }} />
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
