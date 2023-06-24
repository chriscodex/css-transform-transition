import { NavLink } from 'react-router-dom';
import './styles.css';

function Home() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/transform">Transform</NavLink>
        </li>
        <li>
          <NavLink to="/parallax">Parallax</NavLink>
        </li>
        <li>
          <NavLink to="/transition">Transition</NavLink>
        </li>
        <li>
          <NavLink to="/ux">UX</NavLink>
        </li>
        <li>
          <NavLink to="/optimization">Optimization</NavLink>
        </li>
      </ul>
    </div>
  );
}

export { Home };
