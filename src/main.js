/**
 * Created by atsu666 on 2017/04/01.
 */
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import React from 'react';
import App from './containers/App';
import reducer from './reducers';



const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);