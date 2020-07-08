import React, { useContext } from 'react';
import { Homepage } from '../Homepage/Homepage';
import Posts from '../Posts/Posts';
import { Registration } from '../Registration/Registration';
import { Route, Switch } from 'react-router-dom';

const AuthenticatedApp = () => {
    return (
        <Switch>
            <Route path='/'>
                <Homepage />
            </Route>
            <Route path='/posts'>
                <Posts />
            </Route>
        </Switch>    
    )
}

export default AuthenticatedApp;