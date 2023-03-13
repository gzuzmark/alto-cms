import { Link } from '@tanstack/react-location';
import { usePosts } from '../../../lib/usePosts';
import { Logo } from '../../atoms';
import { Search } from '../../molecules/Search/Search';

export const Header = () => {
  const posts = usePosts();
  return (
    <>
      <Logo />
      <div className="menu">
        <button type="button" aria-expanded="false" aria-controls="menu-list">
          <span className="open">☰</span>
          <span className="close">×</span>
          Menu
        </button>
        <ul id="menu-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="search-container">
        <Search />
      </div>
    </>
  );
};
