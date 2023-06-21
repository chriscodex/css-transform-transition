import './App.css';
import { Translate } from './components/Transform/Translate';
import { Scale } from './components/Transform/Scale';
import { Skew } from './components/Transform/Skew';
// import { PseudoClases } from './components/pseudoclases';
// import { PseudoElements } from './components/pseudoelements';

function App() {
  return (
    <>
      <p>Translate</p>
      <Translate />
      <p>Scale</p>
      <Scale />
      <p>Skew</p>
      <Skew />
    </>
  );
}

export default App;
