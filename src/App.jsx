import './App.css';
import { ReactLocation, Router, Outlet, Link } from '@tanstack/react-location';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';
import HomePage from './pages/Home';
import About from './components/templates/About';
import Contact from './components/templates/Contact';
import { Header } from './components/organisms';

const reactLocation = new ReactLocation();

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
];

function App() {
  return (
    <Router routes={routes} location={reactLocation}>
      <HomePage />
      <ReactLocationDevtools initialIsOpen={false} />
    </Router>
  );
}

export default App;
