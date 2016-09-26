import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { repositories } from './repositories';
import { messages } from './messages';
import { issues } from './issues';

const rootReducer = combineReducers({
    routing,
    repositories,
    messages,
    issues
});

export default rootReducer;
