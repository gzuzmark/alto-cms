import { useSearch } from '@tanstack/react-location';
import styles from './posts.module.css';
import { usePosts } from '../../../lib/usePosts.js';
import { MainPost } from '../../molecules/MainPost/MainPost';
import { PostList } from '../../molecules/PostList/PostList';

export const Posts = () => {
  const { search } = useSearch();

  const [posts, setPosts] = usePosts();

  const mainPost = posts.slice(0, 1);

  if (search) {
    const filteredPosts = posts.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <section className={styles.posts}>
        <PostList posts={filteredPosts} />
      </section>
    );
  }
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
