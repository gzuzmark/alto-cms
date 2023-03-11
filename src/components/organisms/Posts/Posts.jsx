import styles from './posts.module.css';

export const Posts = () => (
  <>
    <section className={styles.about}>
      <div className={styles.about__image}>
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <button type="button">Learn More →</button>
      </div>
    </section>
    <section className={styles.posts}>
      <div className={styles.post}>
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
      <div className={styles.post}>
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
      <div className={styles.post}>
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
      <div className={styles.post}>
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
      <div className={styles.post}>
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
      <div className={styles.post}>
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
  </>
);
