import React, { useContext } from 'react';
import { Homepage } from '../Homepage/Homepage';
import { Route } from 'react-router-dom';
import { Login } from '../Login/Login';
import { Registration } from '../Registration/Registration';
import { UserContext } from '../../hooks/UserContext';
import { User } from '../../App';

export const UnauthenticatedApp = () => {
    const userContext = useContext(UserContext)

    const logIn = (user: User) => userContext?.setUser(user)
    return ( 
        <>
            <Route path='/register' exact component={Registration} />
            <Route path='/' exact>
                <Login logUserIn={logIn} />
            </Route>
        </>
    )
}