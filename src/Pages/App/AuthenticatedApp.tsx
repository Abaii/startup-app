import React, { createContext } from 'react';
import { Homepage } from '../Homepage/Homepage';
import Posts from '../Posts/Posts';
import { Route } from 'react-router-dom';
import PostForm from '../../Components/Post/PostForm/PostForm';
import socketIOClient from 'socket.io-client';

export let SocketCtx = createContext<any>(null);
const AuthenticatedApp = () => {
    let socket: any = socketIOClient('http://localhost:4000');
    SocketCtx = createContext(socket);
 

    return (
        <SocketCtx.Provider value={socket}>
            <Route path='/' exact component={Homepage} />
            <Route path='/posts' exact component={Posts} />
            <Route path='/new' exact component={PostForm} />
        </SocketCtx.Provider>    
    )
}

export default AuthenticatedApp;