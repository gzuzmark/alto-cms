import { Link } from '@tanstack/react-location';
import { Logo } from '../../atoms';

export const Header = () => (
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
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
    <div className="search-container">
      <form className="search-form">
        <label htmlFor="search" className="search-label">
          Search the site{' '}
        </label>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="search blog"
          className="input-area"
        />
        <button type="submit" aria-label="search" className="button-area">
          Search
        </button>
      </form>
    </div>
  </>
);
