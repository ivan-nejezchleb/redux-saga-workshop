import { merge } from 'lodash';
import * as Actions from '../constants/actions';
import { getKey } from '../services/repository';

export function getIssues(state, username, repository) {
    return state.issues[getKey(username, repository)];
}

export function issues(state = {}, action) {
    switch (action.type) {
        case Actions.FETCH_ISSUES_REQUESTED: {
            const { username, repository } = action.payload;

            const key = getKey(username, repository);

            return merge({}, state, {
                [key]: { loading: true }
            });
        }

        case Actions.FETCH_ISSUES_LOADED: {
            const { username, repository, issues: issueItems } = action.payload;

            const key = getKey(username, repository);

            return merge({}, state, {
                [key]: { loading: false, issues: issueItems }
            });
        }

        default:
            return state;
    }
}
