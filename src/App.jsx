import { useRoutes, BrowserRouter } from 'react-router-dom';
// import { PseudoClases } from './components/pseudoclases';
// import { PseudoElements } from './components/pseudoelements';
import { Parallax } from './components/Parallax';
import { Home } from './pages/Home';
import { Transform } from './pages/Transform';
import { Transition } from './pages/Transition';
import { Ux } from './pages/Ux';
import { Optimization } from './pages/Optimization';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/transform',
      element: <Transform />
    },
    {
      path: '/parallax',
      element: <Parallax />
    },
    {
      path: '/transition',
      element: <Transition />
    },
    {
      path: '/ux',
      element: <Ux />
    },
    {
      path: '/optimization',
      element: <Optimization />
    },
  ])

  return routes
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
