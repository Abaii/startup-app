import React, { useContext } from 'react';
import { Homepage } from '../Homepage/Homepage';
import Posts from '../Posts/Posts';
import { Registration } from '../Registration/Registration';
import { Route, Switch } from 'react-router-dom';
import PostForm from '../../Components/Post/PostForm/PostForm';

const AuthenticatedApp = () => {
    return (
        <>
            <Route path='/' exact component={Homepage} />
            <Route path='/posts' exact component={Posts} />
            <Route path='/new' exact component={PostForm} />
        </>    
    )
}

export default AuthenticatedApp;