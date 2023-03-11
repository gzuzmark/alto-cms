/* eslint-disable react/prop-types */
import { Outlet } from '@tanstack/react-location';
import { Header } from '../organisms';
import styles from './home.module.css';

export const HomeTemplate = ({ layout }) => (
  <div className={styles.wrapper}>
    <Header />
    <Outlet />
  </div>
);
