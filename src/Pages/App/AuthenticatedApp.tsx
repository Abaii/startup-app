import React, { useContext, useEffect } from 'react';
import { Homepage } from '../Homepage/Homepage';
import Posts from '../Posts/Posts';
import { Route } from 'react-router-dom';
import PostForm from '../../Components/Post/PostForm/PostForm';
import axios from 'axios';
import { UserContext } from '../../hooks/UserContext';

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