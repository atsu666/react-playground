/**
 * Created by atsu666 on 2017/04/01.
 */
import React, {Component, PropTypes} from 'react'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

export default class EntryCard extends React.Component {
    render() {
        const props = this.props;
        return (
        <Card style={{width: '100%'}}>
            <CardTitle
                avatar="https://placeimg.com/80/80/animals"
                title="Avatar style title"
                subtitle="Subtitle here"
            />
            <CardMedia
                aspectRatio="wide"
                image={props.image}
            />
            <CardTitle
                title={props.title}
                subtitle="Subtitle here"
            />
            <CardText>{props.summary}</CardText>
        </Card>
        )
    }
}