import { useState } from 'react';
import { usePosts } from '../../../lib/usePosts';
import styles from './search.module.css';

export const Search = () => {
  const [search, setSearch] = useState();
  const [posts, setPosts] = usePosts();

  return (
    <form className={styles.search__form}>
      <label htmlFor="search" className={styles.search__label}>
        Search the site{' '}
      </label>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="search blog"
        value={search}
        className={styles.input__area}
      />
      <div className="dropdown">
        <div className="dropdown__item">
          <img src={post.image} alt={post.title} width="50" />
        </div>
      </div>
      <button type="submit" aria-label="search" className={styles.button__area}>
        Search
      </button>
    </form>
  );
};
