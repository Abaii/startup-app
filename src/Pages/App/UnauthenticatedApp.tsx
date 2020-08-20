import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../Login/Login';
import { Registration } from '../Registration/Registration';
import { UserContext } from '../../hooks/UserContext';
import ResetPasswordForm from '../../Components/ResetPassword/ResetPasswordForm';
import ResetPassword from '../../Components/ResetPassword/ResetPassword';

import { User } from '../../App';
import { Homepage } from '../Homepage/Homepage';

export const UnauthenticatedApp = () => {
    const userContext = useContext(UserContext)

    const logIn = (user: User) => userContext?.setUser(user)
    return ( 
        <>
            <Route path='/' exact component={Homepage} />
            <Route path='/register' exact component={Registration} />
            <Route path='/login' exact>
                <Login logUserIn={logIn} />
            </Route>
            <Route path='/resetpassword' exact component={ResetPasswordForm}/>
            <Route path='/reset/:token' exact>
                <ResetPassword 
                    login={logIn}
                />
            </Route>
        </>
    )
}