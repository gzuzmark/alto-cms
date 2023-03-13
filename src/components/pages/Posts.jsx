import { ActionLink } from '../atoms/ActionLink/ActionLink';
import { Posts as PostsList } from '../organisms';
import { PostsTemplate } from '../templates/Posts';

export const Posts = () => (
  <PostsTemplate
    addPostLink={<ActionLink href="/blog/posts/add"> Add Post</ActionLink>}
    posts={<PostsList />}
  />
);
