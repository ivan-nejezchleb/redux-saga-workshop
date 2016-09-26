import { take } from 'redux-saga/effects';
// import { add } from 'cornified';

import * as Actions from '../constants/actions';

export function* watchCornify() {
    while (true) { // eslint-disable-line
        yield take(Actions.CORNIFY);

        // call cornify's add
    }
}
