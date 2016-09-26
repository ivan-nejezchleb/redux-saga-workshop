/* eslint-disable camelcase */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getRepositoryData } from '../reducers/repositories';

export class Repository extends Component {
    static propTypes = {
        full_name: PropTypes.string,
        children: PropTypes.element
    };

    render() {
        const { full_name } = this.props;

        return (
            <div>
                <h1>{full_name}</h1>

                <Link to={`/${full_name}/issues`}>Issues</Link>

                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { username, repository } = ownProps.params;

    return getRepositoryData(state, username, repository);
};

export default connect(mapStateToProps)(Repository);
