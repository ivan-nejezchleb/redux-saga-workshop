import * as Actions from '../constants/actions';

export function addErrorMessage(message) {
    return {
        type: Actions.ADD_ERROR_MESSAGE,
        payload: message
    };
}
