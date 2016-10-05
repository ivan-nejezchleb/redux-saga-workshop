import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root';
import configureStore from './store/configureStore';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <Root store={store} history={history} />,
    document.getElementById('root')
);
