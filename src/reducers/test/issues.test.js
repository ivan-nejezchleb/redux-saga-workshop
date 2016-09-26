import { issues } from '../issues';
import { fetchIssuesRequested, fetchIssuesLoaded } from '../../actions/issuesActions';

describe('issues', () => {
    const initialState = undefined;

    it('should return empty object by default', () => {
        const state = issues(initialState, { type: 'INIT' });

        expect(state).toEqual({});
    });

    it('should add issues in loading state', () => {
        const state = issues(initialState, fetchIssuesRequested('user', 'repo'));

        expect(state).toEqual({
            'user:repo': {
                loading: true
            }
        });
    });

    it('should add issues in fetched state', () => {
        const state = issues(initialState, fetchIssuesLoaded('user', 'repo', [1, 2, 3]));

        expect(state).toEqual({
            'user:repo': {
                loading: false,
                issues: [1, 2, 3]
            }
        });
    });
});
