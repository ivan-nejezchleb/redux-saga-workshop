import { fetchIssuesRequested, fetchIssuesLoaded } from '../issuesActions';
import * as Actions from '../../constants/actions';

describe('issues actions', () => {
    it('should create action for requesting fetching issues', () => {
        expect(fetchIssuesRequested('foo', 'bar')).toEqual({
            type: Actions.FETCH_ISSUES_REQUESTED,
            payload: {
                username: 'foo',
                repository: 'bar'
            }
        });
    });

    it('should create action for loaded fetched issues', () => {
        expect(fetchIssuesLoaded('foo', 'bar', [])).toEqual({
            type: Actions.FETCH_ISSUES_LOADED,
            payload: {
                username: 'foo',
                repository: 'bar',
                issues: []
            }
        });
    });
});
