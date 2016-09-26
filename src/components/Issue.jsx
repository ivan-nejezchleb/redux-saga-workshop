import React, { Component, PropTypes } from 'react';

export default class Issue extends Component {
    static propTypes = {
        issue: PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.string
        })
    };

    render() {
        const { title, body } = this.props.issue;

        return (
            <a className="list-group-item">
                <h4 className="list-group-item-heading">{title}</h4>
                <p className="list-group-item-text">{body}</p>
            </a>
        );
    }
}
