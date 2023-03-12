import { MainLayout } from '../organisms/MainLayout';
import { HomeTemplate } from '../templates/Home';
import { Header, Hero, Posts } from '../organisms';

export const Home = () => <HomeTemplate hero={<Hero />} posts={<Posts />} />;
