import { ComponentProps } from 'react';
import { Link } from '@tanstack/react-location';
import styles from './button.module.css';

export function ButtonOrLink({ href, children, ...props }) {
  const isLink = typeof href !== 'undefined';

  const content = (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );

  if (isLink) {
    return (
      <Link to={href} className={styles.button}>
        {children}
      </Link>
    );
  }

  return content;
}
