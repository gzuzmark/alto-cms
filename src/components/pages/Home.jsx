import { HomeTemplate } from '../templates/Home';
import { Hero, Posts } from '../organisms';

export const Home = () => <HomeTemplate hero={<Hero />} posts={<Posts />} />;
