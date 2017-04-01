import React from 'react';
import MDSpinner from "react-md-spinner";
import EntryCard from '../components/EntryCard';

const url = "http://localhost:9090/public/api/entries.json";

export default class Summary extends React.Component {

    componentDidMount() {
        this.props.fetchEntries(url);
    }

    render() {
        const props = this.props;
        console.log('Summary');
        return (
            <div className="container" style={{padding: "15px"}}>
                <div className="row">
                    {props.entries.length > 0 ?
                        props.entries.map(item => {
                            return (<div className="col-md-4">
                                <div style={{paddingBottom: "15px"}}>
                                    <EntryCard {...item}/>
                                </div>
                            </div>)
                        })
                        :
                        <div style={{textAlign: "center"}}>
                            <MDSpinner />
                        </div>
                    }
                </div>
            </div>);
    }
}