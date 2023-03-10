import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <header className="top">
        <h3 className="logo">
          <a href="">Blog</a>
          <span className="text-primarySecondary dark:text-primarySecondaryDark">
            .
          </span>
        </h3>
        <div className="menu">
          <button type="button" aria-expanded="false" aria-controls="menu-list">
            <span className="open">☰</span>
            <span className="close">×</span>
            Menu
          </button>
          <ul id="menu-list">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
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
      </header>

      <div className="hero-image">
        <header className="hero">
          <h2>Largest rodes in Europe</h2>

          <p>
            Explore with us the largest roads across all Europe and se the
            beautiful scenery of famous hollywood movies!
          </p>
        </header>
      </div>

      <section className="about">
        <div className="about__image">
          <img
            src="https://images.pexels.com/photos/15641525/pexels-photo-15641525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="new photography style"
          />
        </div>
        <div className="about__details">
          <h2>New photography styles</h2>
          <p>New retro photography</p>
          <p>Does all the hype about anime style pictures worth it?</p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button type="button">Learn More →</button>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <img
            src="https://slug.vercel.app/s/ChE99y"
            alt="swimmming in the ocean"
          />
          <h3>Swimming pool</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            assumenda.
          </p>
        </div>
        <div className="feature">
          <img
            src="https://slug.vercel.app/s/ChE99y"
            alt="swimmming in the ocean"
          />
          <h3>Swimming pool</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            assumenda.
          </p>
        </div>
        <div className="feature">
          <img
            src="https://slug.vercel.app/s/ChE99y"
            alt="swimmming in the ocean"
          />
          <h3>Swimming pool</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            assumenda.
          </p>
        </div>
        <div className="feature">
          <img
            src="https://slug.vercel.app/s/ChE99y"
            alt="swimmming in the ocean"
          />
          <h3>Swimming pool</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            assumenda.
          </p>
        </div>
        <div className="feature">
          <img
            src="https://slug.vercel.app/s/ChE99y"
            alt="swimmming in the ocean"
          />
          <h3>Swimming pool</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            assumenda.
          </p>
        </div>
        <div className="feature">
          <img
            src="https://slug.vercel.app/s/ChE99y"
            alt="swimmming in the ocean"
          />
          <h3>Swimming pool</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            assumenda.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
