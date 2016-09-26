import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class RepositoryHeader extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        repository: PropTypes.string.isRequired,
        index: PropTypes.number,
        data: PropTypes.object
    };

    renderContent() {
        const { data, index } = this.props;

        if (!data) {
            return <span>Loading...</span>;
        }

        return [
            <span key="1">{`${index}. ${data.full_name}`}</span>,
            <span key="2" className="badge">14</span>
        ];
    }

    render() {
        const { username, repository } = this.props;

        return (
            <Link
                className="list-group-item"
                activeClassName="active"
                to={`/${username}/${repository}`}
            >
                {this.renderContent()}
            </Link>
        );
    }
}
