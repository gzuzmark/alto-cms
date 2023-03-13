import { Link } from '@tanstack/react-location';
import DOMPurify from 'dompurify';
import { usePost } from '../../../lib/getPost';

export const Post = ({ id }) => {
  const post = usePost(id);
  console.log('🚀 ~ file: Post.jsx:16 ~ Post ~ post:', post);

  return (
    <div className="post">
      <Link to="/blog">return to Blog</Link>
      &nbsp;|&nbsp;
      <Link to={`/blog/posts/${post.id}/edit`}>Edit Post</Link>
      <h2>{post.title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.body) }}
      />
    </div>
  );
};
