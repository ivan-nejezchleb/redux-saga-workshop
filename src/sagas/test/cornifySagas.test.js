import { call, take } from 'redux-saga/effects';
import { add } from 'cornified';

import { watchCornify } from '../cornifySagas';
import * as Actions from '../../constants/actions';

describe('cornify sagas', () => {
    it('should listen on cornify action and add unicorn!', () => {
        const saga = watchCornify();

        expect(saga.next().value).toEqual(
            take(Actions.CORNIFY)
        );

        expect(saga.next().value).toEqual(
            call(add)
        );

        expect(saga.next().value).toEqual(
            take(Actions.CORNIFY)
        );
    });
});
