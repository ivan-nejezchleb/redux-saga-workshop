// import * as API from '../services/github';
// import * as Actions from '../constants/actions';
// import { fetchIssuesLoaded } from '../actions/issuesActions';

export function* fetchIssues(/* action */) {
    yield 2;

    // get username, repository from action's payload
    // call fetch issues method on API object with username and repository parameters
    // dispatch fetchIssuesLoaded action once issues were fetched
}

export function* watchFetchIssues() {
    yield 1;

    // for every action FETCH_ISSUES_REQUESTED run fetch issues saga
}
