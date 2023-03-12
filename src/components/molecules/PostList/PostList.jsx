import styles from './postlist.module.css';

export const PostList = ({ posts }) => (
  <>
    {posts.map((post) => (
      <div key={post.id} className={styles.post}>
        <img src={post.image} alt={post.title} />
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))}
  </>
);
