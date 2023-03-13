import { useState, useEffect } from 'react';

export const usePost = (postId) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts'));

    const foundPost = posts.find((p) => p.id === postId);

    if (post) {
      setPost(foundPost);
    }
  }, [postId]);

  return post;
};

export const usePostByName = (search) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsList = JSON.parse(localStorage.getItem('posts'));

    const filteredPosts = postsList.filter(
      ({ title }) => title.toLowerCase() === search.toLowerCase()
    );
    if (filteredPosts.length > 0) {
      setPosts([...filteredPosts]);
    }
  }, [search]);

  return posts;
};
