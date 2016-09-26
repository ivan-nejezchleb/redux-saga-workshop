import * as Actions from '../../constants/actions';
import {
    addRepository,
    fetchRepositoryLoaded,
    fetchRepositoryRequested,
    loadRepositories
} from '../repositoryActions';

describe('repository actions', () => {
    it('should create action for adding new repository', () => {
        expect(addRepository('foo/bar')).toEqual({
            type: Actions.ADD_REPOSITORY,
            payload: {
                username: 'foo',
                repository: 'bar'
            }
        });
    });

    it('should create action for loaded fetched repository', () => {
        expect(fetchRepositoryLoaded('foo', 'bar', [])).toEqual({
            type: Actions.FETCH_REPOSITORY_LOADED,
            payload: {
                username: 'foo',
                repository: 'bar',
                data: []
            }
        });
    });

    it('should create action for requesting fetching repository', () => {
        expect(fetchRepositoryRequested('foo', 'bar')).toEqual({
            type: Actions.FETCH_REPOSITORY_REQUESTED,
            payload: {
                username: 'foo',
                repository: 'bar'
            }
        });
    });

    it('should create action for requesting fetching all initial repositories', () => {
        expect(loadRepositories()).toEqual({
            type: Actions.FETCH_REPOSITORIES_REQUESTED
        });
    });
});
