import { useRoutes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Parallax } from './components/Parallax';
// import { PseudoClases } from './components/pseudoclases';
// import { PseudoElements } from './components/pseudoelements';
import { Home } from './pages/Home';
import { Transform } from './pages/Transform';
import { Transition } from './pages/Transition';

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
