import { useLocalStorageState } from './useLocalStorageState';
import { posts as postsData } from './postsData';

export const usePosts = () => {
  const [posts, setPosts] = useLocalStorageState(postsData, 'posts');
  return [posts, setPosts];
};
