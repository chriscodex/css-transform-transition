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
      </ul>
    </div>
  );
}

export { Home };
