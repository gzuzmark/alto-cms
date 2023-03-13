import { Link } from '@tanstack/react-location';
import styles from './postlist.module.css';

export const PostList = ({ posts }) => (
  <>
    {posts.map((post) => (
      <Link to={`/blog/posts/${post.id}`} key={post.id} className={styles.post}>
        <img src={post.image} alt={post.title} />
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </Link>
    ))}
  </>
);
