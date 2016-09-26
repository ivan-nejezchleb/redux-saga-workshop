import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as CornifyActions from '../actions/cornifyActions';

function Lokalhost({ cornify }) {
    return (
        <div>
            <h1>Lokál-host</h1>

            <button onClick={cornify}>Na zdraví!</button>
        </div>
    );
}

Lokalhost.propTypes = {
    cornify: PropTypes.func.isRequired
};

export default connect(null, { cornify: CornifyActions.cornify })(Lokalhost);
