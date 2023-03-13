import { Button } from '../../atoms/Button/Button';
import styles from './mainpost.module.css';

export const MainPost = ({ post }) => (
  <>
    <div className={styles.about__image}>
      <img src={post.image} alt={post.title} />
    </div>
    <div className="about__details">
      <h2>{post.title}</h2>

      <p>{post.body}</p>
      <Button href={`/blog/posts/${post.id}`} type="button">
        Learn More →
      </Button>
    </div>
  </>
);
