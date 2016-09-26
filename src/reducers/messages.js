import { merge, omit, values } from 'lodash';
import * as Actions from '../constants/actions';

export function getMessages(state) {
    return values(state.messages);
}

export function messages(state = {}, action) {
    switch (action.type) {
        case Actions.ADD_ERROR_MESSAGE: {
            const { id, message } = action.payload;

            return merge({}, state, { [id]: message });
        }

        case Actions.REMOVE_MESSAGE: {
            const id = action.payload;

            return omit(state, [id]);
        }

        default:
            return state;
    }
}
