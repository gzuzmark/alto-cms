import { Link as RLink } from '@tanstack/react-location';
import styles from './actionlink.module.css';

export function ActionLink({ href, children, ...props }) {
  return (
    <RLink to={href} className={styles.action__link}>
      {children}
    </RLink>
  );
}
