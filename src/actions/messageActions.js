import * as Actions from '../constants/actions';

export function addErrorMessage(id, message) {
    return {
        type: Actions.ADD_ERROR_MESSAGE,
        payload: {
            id,
            message
        }
    };
}

export function removeMessage(id) {
    return {
        type: Actions.REMOVE_MESSAGE,
        payload: id
    };
}
