import { call, put } from 'redux-saga/effects';

import { fetchIssues } from '../issuesSagas';
import { fetchIssuesRequested, fetchIssuesLoaded } from '../../actions/issuesActions';

import * as API from '../../services/github';

describe('issues sagas', () => {
    const username = 'foo';
    const repository = 'bar';

    const action = fetchIssuesRequested(username, repository);

    const issues = [1, 2, 3];

    it('should load issues for given username/repository', () => {
        const saga = fetchIssues(action);

        expect(saga.next().value).toEqual(
            call(API.fetchIssues, username, repository)
        );

        expect(saga.next(issues).value).toEqual(
            put(fetchIssuesLoaded(username, repository, issues))
        );
    });
});
