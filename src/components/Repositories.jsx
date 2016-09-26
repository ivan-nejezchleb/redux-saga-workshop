import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';

import RepositoryHeader from './RepositoryHeader';
import Messages from './Messages';
import { addRepository, loadRepositories } from '../actions/repositoryActions';
import { addErrorMessage } from '../actions/errorActions';
import { isValidUsernameRepository } from '../services/repository';

const ENTER_KEY = 'Enter';

export class Repositories extends Component {
    static propTypes = {
        children: PropTypes.element,
        repositories: PropTypes.array.isRequired,
        loadRepositories: PropTypes.func.isRequired,
        addRepository: PropTypes.func.isRequired,
        addErrorMessage: PropTypes.func.isRequired
    };

    constructor() {
        super();

        this.onAddRepository = this.onAddRepository.bind(this);
        this.onRepositoryNameChange = this.onRepositoryNameChange.bind(this);
        this.onRepositoryNameKeyPress = this.onRepositoryNameKeyPress.bind(this);

        this.state = { newRepositoryName: '' };
    }

    componentWillMount() {
        this.props.loadRepositories(this.props.repositories);
    }

    onAddRepository() {
        const { newRepositoryName } = this.state;

        if (isValidUsernameRepository(newRepositoryName)) {
            this.props.addRepository(newRepositoryName);

            this.clearRepositoryName();
        } else {
            this.props.addErrorMessage('Invalid repository name.');
        }
    }

    onRepositoryNameChange(evt) {
        this.setState({ newRepositoryName: evt.target.value });
    }

    onRepositoryNameKeyPress(evt) {
        if (evt.key === ENTER_KEY) {
            this.onAddRepository();
        }
    }

    clearRepositoryName() {
        this.setState({ newRepositoryName: '' });
    }

    render() {
        const { repositories, children } = this.props;

        return (
            <div>
                <div className="row headline">
                    <div className="col-md-12">
                        <h1>Trending repos</h1>
                    </div>
                </div>

                <Messages />

                <div className="row">
                    <div className="col-md-6">
                        <div className="repositories list-group">
                            {repositories.map(({ username, repository, data }, index) =>
                                <RepositoryHeader
                                    key={`${username}:${repository}`}
                                    username={username}
                                    repository={repository}
                                    index={index + 1}
                                    data={data}
                                />
                            )}
                        </div>

                        <div className="input-group">
                            <input
                                onChange={this.onRepositoryNameChange}
                                onKeyPress={this.onRepositoryNameKeyPress}
                                value={this.state.newRepositoryName}
                                type="text"
                                className="form-control"
                                placeholder="username/repository"
                            />
                            <span className="input-group-btn">
                                <button
                                    onClick={this.onAddRepository}
                                    className="btn btn-primary"
                                    type="button"
                                >
                                    Add
                                </button>
                            </span>
                        </div>
                    </div>

                    <div className="col-md-6">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ repositories: values(state.repositories) });
const mapDispatchToProps = { addRepository, loadRepositories, addErrorMessage };

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
