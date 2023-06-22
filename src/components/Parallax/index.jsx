import './styles.css';

function Parallax() {
  return (
    <div className="parallax-container">
      <div className="image image-background">
        <img src="https://i.ibb.co/jbLKgvX/Background.png" alt="Background" />
      </div>

      <div className="image image-middle">
        <div className="card one"></div>
        <div className="card two"></div>
        <div className="card three"></div>
      </div>

      <div className="image image-foreground">
        <img src="https://i.ibb.co/vJdbRkj/Alice.png" alt="Foreground" />
      </div>
    </div>
  );
}

export { Parallax };
