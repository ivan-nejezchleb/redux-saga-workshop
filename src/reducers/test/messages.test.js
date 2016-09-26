import { addErrorMessage, removeMessage } from '../../actions/messageActions';
import { messages } from '../messages';

describe('messages reducer', () => {
    it('should be empty by default', () => {
        const state = messages(undefined, { type: 'INIT' });

        expect(state).toEqual({});
    });

    it('should add new error message', () => {
        const id = 'xyz-123';
        const message = 'My message';

        const state = messages({}, addErrorMessage(id, message));

        expect(state).toEqual({ [id]: message });
    });

    it('should remove message', () => {
        const id = 'xyz-123';
        const message = 'My message';

        const state = messages({ [id]: message }, removeMessage(id));

        expect(state).toEqual({});
    });
});
