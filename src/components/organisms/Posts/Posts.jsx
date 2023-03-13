import styles from './posts.module.css';
import { usePosts } from '../../../lib/usePosts.js';
import { MainPost } from '../../molecules/MainPost/MainPost';
import { PostList } from '../../molecules/PostList/PostList';

export const Posts = () => {
  const [posts, setPosts] = usePosts();
  console.log('🚀 ~ file: Posts.jsx:8 ~ Posts ~ posts:', posts);
  // const newPosts = posts.map((p) => {
  //   const id = crypto.randomUUID();
  //   return { id, ...p };
  // });
  // setPosts(newPosts);
  const mainPost = posts.slice(0, 1);
  console.log('🚀 ~ file: Posts.jsx:15 ~ Posts ~ mainPost:', mainPost);

  return (
    <>
      <section className={styles.about}>
        <MainPost post={mainPost[0]} />
      </section>
      <section className={styles.posts}>
        <PostList posts={posts.slice(1)} />
      </section>
    </>
  );
};
