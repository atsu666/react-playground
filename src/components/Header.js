import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/Link';

export default () => {
    return (
    <AppBar title='React Playground' leftIcon='menu'>
        <Navigation type='horizontal'>
            <Link href='http://' label='Inbox' icon='inbox' />
            <Link href='http://' active label='Profile' icon='person' />
        </Navigation>
    </AppBar>
    );
}