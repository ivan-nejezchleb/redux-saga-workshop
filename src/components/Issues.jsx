import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as IssuesActions from '../actions/issuesActions';
import { getIssues } from '../reducers/issues';
import Issue from '../components/Issue';

export class Issues extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        repository: PropTypes.string.isRequired,
        fetchIssuesRequested: PropTypes.func.isRequired,
        issues: PropTypes.object
    };

    componentWillMount() {
        const { username, repository, fetchIssuesRequested } = this.props;

        fetchIssuesRequested(username, repository);
    }

    render() {
        const { issues } = this.props;

        // FIXME: Improve initialization - !issues shouldn't be necessary
        if (!issues || issues.loading) {
            return <div>(spinning wheel) loading</div>;
        }

        return (
            <div>
                <h3>List of issues:</h3>

                <div className="list-group">
                    {issues.issues.map(issue =>
                        (<Issue key={issue.id} issue={issue} />))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { username, repository } = ownProps.params;

    return {
        username,
        repository,
        issues: getIssues(state, username, repository)
    };
};

export default connect(mapStateToProps, IssuesActions)(Issues);
