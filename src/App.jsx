import './App.css';
import { ReactLocation, Router, Outlet, Link } from '@tanstack/react-location';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';
import { Home } from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { MainLayout } from './components/organisms/MainLayout';
import { Posts } from './components/pages/Posts';
import { AddPost } from './components/pages/AddPost';

const reactLocation = new ReactLocation();

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'blog/posts/add',
    element: <AddPost />,
  },
  {
    path: 'blog',
    element: <Posts />,
  },
];

function App() {
  return (
    <Router routes={routes} location={reactLocation}>
      <MainLayout />
      <ReactLocationDevtools initialIsOpen={false} />
    </Router>
  );
}

export default App;
