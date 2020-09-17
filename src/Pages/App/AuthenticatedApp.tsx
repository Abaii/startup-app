import React, { createContext } from 'react';
import { Homepage } from '../Homepage/Homepage';
import Posts from '../Posts/Posts';
import { Route } from 'react-router-dom';
import PostForm from '../../Components/Post/PostForm/PostForm';
import Post from '../../Pages/Post/Post';
import ProfileRenderer from "../../Components/User/ProfileRenderer";
        
const AuthenticatedApp = () => {
  return (
    <>
      <Route path="/" exact component={Homepage} />
      <Route path="/posts" exact component={Posts} />
      <Route path="/new" exact component={PostForm} />
      <Route path="/profile" exact component={ProfileRenderer} />
      <Route path='/post/:id' exact component={Post} />
    </>
  );
};

export default AuthenticatedApp;
