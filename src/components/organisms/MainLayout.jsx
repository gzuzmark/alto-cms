import { Outlet } from '@tanstack/react-location';
import { Header } from '.';
import styles from './layout.module.css';

export const MainLayout = () => (
  <div className={styles.wrapper}>
    <Header />
    <Outlet />
  </div>
);
