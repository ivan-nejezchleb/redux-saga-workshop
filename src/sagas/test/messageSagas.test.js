// import { v4 as uuid } from 'uuid';

import { showErrorMessage } from '../messageSagas';
// import { addErrorMessage, removeMessage } from '../../actions/messageActions';

describe('message sagas', () => {
    it('should show error message', () => {
        const message = 'My secrent message';
        // const messageId = 'xyz-123';

        const saga = showErrorMessage(message);

        expect(saga.next()).toEqual({ value: undefined, done: true });
    });
});
