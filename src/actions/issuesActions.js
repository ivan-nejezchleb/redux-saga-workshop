import * as Actions from '../constants/actions';

export function fetchIssuesRequested(username, repository) {
    return {
        type: Actions.FETCH_ISSUES_REQUESTED,
        payload: {
            username,
            repository
        }
    };
}

export function fetchIssuesLoaded(username, repository, issues) {
    return {
        type: Actions.FETCH_ISSUES_LOADED,
        payload: {
            username,
            repository,
            issues
        }
    };
}
