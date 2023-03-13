import { Outlet } from '@tanstack/react-location';
import { Header } from '.';
import styles from './layout.module.css';

export const MainLayout = () => (
  <>
    <header className={styles.top}>
      <Header />
    </header>
    <Outlet />
  </>
);
