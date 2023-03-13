import { Link, useNavigate } from '@tanstack/react-location';
import { useEffect, useRef, useMemo, useState } from 'react';
import { usePosts } from '../../../lib/usePosts';
import { Button } from '../../atoms';
import styles from './search.module.css';

export const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdwonRef = useRef();
  const [posts, setPosts] = usePosts();

  const onInputChange = (e) => {
    setIsOpen(true);
    setSearch(e.target.value);
  };

  const onSelectedItemChange = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    navigate({ to: `/blog/posts/${id}`, replace: true });
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: dropdown } = dropdwonRef;
    if (dropdown && !dropdown.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const filteredBlogs = useMemo(
    () => posts.filter((post) => post.title.toLowerCase().includes(search)),
    [search, posts]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate({ to: `/blog?search=${search}` });
  };

  return (
    <form className={styles.search__form} onSubmit={handleSearch}>
      <label htmlFor="search" className={styles.search__label}>
        Search the site{' '}
      </label>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="search blog"
        value={search}
        onChange={onInputChange}
        className={styles.input__area}
      />
      {isOpen && search.length > 0 && (
        <ul ref={dropdwonRef} className={styles.dropdown}>
          {filteredBlogs.map((post, index) => (
            <Link onClick={(e) => onSelectedItemChange(e, post.id)}>
              <li
                key={post.id}
                tabIndex={index + 1}
                className={styles.dropdown__item}
              >
                <img src={post.image} alt={post.title} width="50" />
                {post.title}
              </li>
            </Link>
          ))}
          {!filteredBlogs.length && (
            <li className={styles.dropdown__item}>
              Sorry, no content found for {search}
            </li>
          )}
        </ul>
      )}

      <Button type="submit" aria-label="search" className={styles.button__area}>
        Search
      </Button>
    </form>
  );
};
