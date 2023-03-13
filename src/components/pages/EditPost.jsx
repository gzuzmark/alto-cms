import { useMatch } from '@tanstack/react-location';
import { usePost } from '../../lib/getPost';
import { AddEditPost } from '../organisms/AddEditPost/AddEditPost';
import { EditPostTemplate } from '../templates/EditPost';

export const EditPostPage = () => {
  const {
    params: { postId },
  } = useMatch();
  const post = usePost(postId);
  return <EditPostTemplate editPost={<AddEditPost post={post} />} />;
};
