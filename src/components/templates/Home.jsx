/* eslint-disable react/prop-types */
import styles from './home.module.css';

export const HomeTemplate = ({ hero, posts }) => (
  <div className={styles.wrapper}>
    {hero}
    {posts}
  </div>
);
