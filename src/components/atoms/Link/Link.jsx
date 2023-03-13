import { ComponentProps } from 'react';
import { Link as RLink } from '@tanstack/react-location';
import styles from './link.module.css';

export function Link({ href, children, ...props }) {
  return (
    <RLink to={href} className={styles.link}>
      {children}
    </RLink>
  );
}
