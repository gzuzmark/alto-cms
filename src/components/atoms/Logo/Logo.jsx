import React from 'react';
import { Link } from '@tanstack/react-location';
import styles from './logo.module.css';

export const Logo = () => (
  // <div>
  //   <Link to="/">
  //     <img
  //       src="assets/vercel"
  //     />
  //   </Link>
  // </div>

  <h3 className={styles.logo}>
    <Link to="/">El Blog</Link>
    <span className="">.</span>
  </h3>
);
