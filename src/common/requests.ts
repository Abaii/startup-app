import axios from 'axios';

export const searchPosts = async (callback: any, searchTerm: string) => {
  const { data } = await axios.get(
    `http://localhost:3001/searchPost/${searchTerm}?page=1`,
    {
      withCredentials: true,
    },
  );
  callback(data.cards);
};

export const getAllPosts = async (callback: any) => {
  const { data } = await axios.get('http://localhost:3001/post?page=1', {
    withCredentials: true,
  });
  callback(data.cards);
};

export const getPostData = async (postId: number, callback: any) => {
  const { data } = await axios.get(`http://localhost:3001/post/${postId}`, {
    withCredentials: true,
  });
  callback(data.post);
};

export const getUserProfile = async (userId: number, callback: any) => {
  const { data } = await axios.get(`http://localhost:3001/user/${userId}`, {
    withCredentials: true,
  });
  callback(data.profile);
};

export const getUserPosts = async (userId: number, callback: any) => {
  const { data } = await axios.post(
    'http://localhost:3001/getposts',
    { ids: [userId] },
    {
      withCredentials: true,
    },
  );
  callback(data.data);
};
