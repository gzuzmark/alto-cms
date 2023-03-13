import { usePosts } from '../../lib/usePosts';
import { ButtonOrLink } from '../atoms/ButtonLink';
import { Posts as PostsList } from '../organisms';
import { PostsTemplate } from '../templates/Posts';

export const Posts = () => (
  <PostsTemplate
    addPostLink={<ButtonOrLink href="/blog/posts/add"> Add Post</ButtonOrLink>}
    posts={<PostsList />}
  />
);
