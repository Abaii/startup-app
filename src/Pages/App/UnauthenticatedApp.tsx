import React from 'react';
import { Homepage } from '../Homepage/Homepage';
import { Route } from 'react-router-dom';

export const UnauthenticatedApp = () => {
    return (
        <>
            <Route path='/' exact component={Homepage} />
            <Route path='/'>
                <div>unauthenticated mate</div>
            </Route>
        </>
    )
}