import { addErrorMessage, removeMessage } from '../messageActions';
import * as Actions from '../../constants/actions';

describe('message actions', () => {
    it('should create action for adding error message', () => {
        const id = 'xyz-123';
        const message = 'My error text body';

        expect(addErrorMessage(id, message)).toEqual({
            type: Actions.ADD_ERROR_MESSAGE,
            payload: {
                id,
                message
            }
        });
    });

    it('should create action for removing message', () => {
        const id = 'xyz-123';

        expect(removeMessage(id)).toEqual({
            type: Actions.REMOVE_MESSAGE,
            payload: id
        });
    });
});
