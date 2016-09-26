import React from 'react';
import { Route } from 'react-router';
import Issues from '../components/Issues';
import Repository from '../components/Repository';
import Repositories from '../components/Repositories';
import Lokalhost from '../components/Lokalhost';

export default (
    <Route path="/" component={Repositories}>
        <Route path=":username/:repository" component={Repository}>
            <Route path="issues" component={Issues} />
        </Route>
        <Route path="/lokalhost" component={Lokalhost} />
    </Route>
);
