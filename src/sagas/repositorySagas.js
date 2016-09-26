import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import * as Actions from '../constants/actions';
import * as API from '../services/github';

import { fetchRepositoryLoaded } from '../actions/repositoryActions';
// import { logError } from '../services/logging';
// import { showErrorMessage } from './messageSagas';

function* fetchSingleRepository(username, repository) {
    const issues = yield call(API.fetchRepository, username, repository);

    yield put(fetchRepositoryLoaded(username, repository, issues));
}

export function* fetchRepositories(action) {
    const repositories = action.payload;

    yield repositories.map(({ username, repository }) =>
        call(fetchSingleRepository, username, repository));
}

// This is the method you are looking for
export function* fetchRepository(action) {
    const { username, repository } = action.payload;

    yield* fetchSingleRepository(username, repository);
}

export function* watchFetchRepository() {
    yield takeEvery(Actions.ADD_REPOSITORY, fetchRepository);
}

export function* watchFetchRepositories() {
    yield takeEvery(Actions.FETCH_REPOSITORIES_REQUESTED, fetchRepositories);
}
