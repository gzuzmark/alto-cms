/* eslint-disable react/prop-types */
import { Outlet } from '@tanstack/react-location';
import { Hero, Posts } from '../organisms';
import styles from './home.module.css';

export const HomeTemplate = ({ hero, posts }) => (
  <div className={styles.wrapper}>
    {hero}
    {posts}
  </div>
);
