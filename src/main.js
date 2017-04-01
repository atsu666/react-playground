/**
 * Created by atsu666 on 2017/04/01.
 */
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';

import React from 'react';
import App from './containers/App';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);