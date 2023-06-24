import './styles.css';

function WaitTime() {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Mujer</a>
          <ul>
            <li><a href="/">Camisetas</a></li>
            <li><a href="/">Pantalones</a></li>
            <li>
              <a href="/">Shorts</a>
              <ul>
                <li><a href="/">Cortos</a></li>
                <li><a href="/">Largos</a></li>
                <li><a href="/">Medianos</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Hombre</a>
        </li>
        <li>
          <a href="/">Niños</a>
        </li>
      </ul>
    </div>
  );
}

export { WaitTime };
