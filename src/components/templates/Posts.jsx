/* eslint-disable react/prop-types */
import styles from './home.module.css';

export const PostsTemplate = ({ addPostLink, posts }) => (
  <div className={styles.wrapper}>
    <div>{addPostLink}</div>
    {posts}
  </div>
);
