import { call, put } from 'redux-saga/effects';
import { fetchRepository } from '../repositorySagas';
import * as API from '../../services/github';
import { fetchRepositoryRequested, removeRepository } from '../../actions/repositoryActions';
import { showErrorMessage } from '../messageSagas';
import { logError } from '../../services/logging';

describe('repository sagas', () => {
    describe('fetchRepository', () => {
        const username = 'foo';
        const repository = 'bar';

        const action = fetchRepositoryRequested(username, repository);


        it('should handle missing repository', () => {
            const saga = fetchRepository(action);

            const error = { code: 404, message: 'Not found' };
            const messageId = 'xyz-123';

            expect(saga.next().value).toEqual(
                call(API.fetchRepository, username, repository)
            );

            expect(saga.throw(error).value).toEqual(
                call(logError, error)
            );

            expect(saga.next(messageId).value).toEqual(
                call(showErrorMessage, 'Repository not found')
            );

            expect(saga.next().value).toEqual(
                put(removeRepository(username, repository))
            );

            expect(saga.next()).toEqual({ value: undefined, done: true });
        });
    });
});
