import * as Actions from '../constants/actions';
import { getUsernameRepository } from '../services/repository';

export function addRepository(newRepositoryName) {
    const [username, repository] = getUsernameRepository(newRepositoryName);

    return {
        type: Actions.ADD_REPOSITORY,
        payload: {
            username,
            repository
        }
    };
}

export function removeRepository(username, repository) {
    return {
        type: Actions.REMOVE_REPOSITORY,
        payload: {
            username,
            repository
        }
    };
}

export function loadRepositories(repositories) {
    return {
        type: Actions.FETCH_REPOSITORIES_REQUESTED,
        payload: repositories
    };
}

export function fetchRepositoryRequested(username, repository) {
    return {
        type: Actions.FETCH_REPOSITORY_REQUESTED,
        payload: {
            username,
            repository
        }
    };
}

export function fetchRepositoryLoaded(username, repository, data) {
    return {
        type: Actions.FETCH_REPOSITORY_LOADED,
        payload: {
            username,
            repository,
            data
        }
    };
}
