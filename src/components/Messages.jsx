import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { getMessages } from '../reducers/messages';

function Message({ content }) {
    return (
        <div className="alert alert-danger">
            {content}
        </div>
    );
}

Message.propTypes = {
    content: PropTypes.string.isRequired
};

function Messages({ messages }) {
    if (!messages.length) {
        return null;
    }

    return (
        <div className="col-md-12">
            {messages.map((message, id) => <Message key={id} content={message} />)}
        </div>
    );
}

Messages.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = (state) => ({ messages: getMessages(state) });

export default connect(mapStateToProps)(Messages);
