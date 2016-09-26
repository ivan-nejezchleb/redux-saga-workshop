import { fork } from 'redux-saga/effects';
import { watchCornify } from './cornifySagas';
import { watchFetchRepository, watchFetchRepositories } from './repositorySagas';

export default function* root() {
    yield [
        fork(watchFetchRepository),
        fork(watchFetchRepositories),
        fork(watchCornify)
    ];
}
