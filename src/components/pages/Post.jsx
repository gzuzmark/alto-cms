import { useMatch } from '@tanstack/react-location';
import { Post } from '../organisms';

export const PostPage = () => {
  const {
    params: { postId },
  } = useMatch();
  return <Post id={postId} />;
};
