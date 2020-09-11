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
