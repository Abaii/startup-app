import React from 'react';
import { Registration } from '../Registration/Registration';
import { Route, Switch } from 'react-router-dom';

export const UnauthenticatedApp = () => {
    return (
        <Switch>
            <Route path="/">
                <div>Unauthenticated</div>
            </Route>
            <Route path="/register">
                <Registration />
            </Route>
        </Switch>
    )
}