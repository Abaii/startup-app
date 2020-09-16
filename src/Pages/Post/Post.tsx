import React from 'react';
import PostRenderer from '../../Components/Post/PostForm/PostRenderer';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();

    return (
        <PostRenderer postId={id}/>
    )

}

export default Post;