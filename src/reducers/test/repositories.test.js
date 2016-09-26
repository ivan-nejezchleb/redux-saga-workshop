import { values } from 'lodash';
import { repositories } from '../repositories';
import { addRepository, removeRepository } from '../../actions/repositoryActions';

describe('repositories', () => {
    it('should return three default repositories', () => {
        const state = values(repositories(undefined, { type: 'INIT' }));

        expect(state.length).toBe(3);
        expect(state.map(r => r.repository)).toEqual(['react', 'redux', 'redux-saga']);
    });

    it('should add repository in loading state', () => {
        const state = repositories({}, addRepository('foo/bar'));

        expect(state).toEqual({
            'foo:bar': {
                username: 'foo',
                repository: 'bar'
            }
        });
    });

    it('should remove repository from the state', () => {
        const state = repositories({ 'foo:bar': {} }, removeRepository('foo', 'bar'));

        expect(state).toEqual({});
    });
});
