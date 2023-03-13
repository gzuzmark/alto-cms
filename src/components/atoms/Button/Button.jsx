import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';
import styles from './button.module.css';

export function Button({ ...props }) {
  return <ButtonOrLink className={styles.button} {...props} />;
}
