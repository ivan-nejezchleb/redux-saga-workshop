import * as Actions from '../../constants/actions';
import { cornify } from '../cornifyActions';

describe('cornify actions', () => {
    it('should do the magic', () => {
        expect(cornify()).toEqual({
            type: Actions.CORNIFY
        });
    });
});
