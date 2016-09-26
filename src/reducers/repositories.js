import { get, merge, omit } from 'lodash';
import * as Actions from '../constants/actions';
import { getKey } from '../services/repository';

export function getRepositoryData(state, username, repository) {
    return get(state, `repositories.${getKey(username, repository)}.data`, {});
}

const INITIAL_REPOSITORIES = [
    { username: 'facebook', repository: 'react' },
    { username: 'reactjs', repository: 'redux' },
    { username: 'yelouafi', repository: 'redux-saga' }
];

const INITIAL_REPOSITORIES_MAP
    = INITIAL_REPOSITORIES.reduce((state, { username, repository }) =>
        ({ ...state, [getKey(username, repository)]: { username, repository } }), {});

export function repositories(state = INITIAL_REPOSITORIES_MAP, action) {
    switch (action.type) {
        case Actions.ADD_REPOSITORY: {
            const { username, repository } = action.payload;

            const key = getKey(username, repository);

            return merge({}, state, {
                [key]: {
                    username,
                    repository
                }
            });
        }

        case Actions.REMOVE_REPOSITORY: {
            const { username, repository } = action.payload;

            const key = getKey(username, repository);

            return omit(state, [key]);
        }

        case Actions.FETCH_REPOSITORY_LOADED: {
            const { username, repository, data } = action.payload;

            const key = getKey(username, repository);

            return merge({}, state, {
                [key]: { ...state[key], data }
            });
        }

        default:
            return state;
    }
}
