import './App.css';
import { Translate } from './components/Transform/Translate';
import { Scale } from './components/Transform/Scale';
// import { PseudoClases } from './components/pseudoclases';
// import { PseudoElements } from './components/pseudoelements';

function App() {
  return (
    <>
      <p>Translate</p>
      <Translate />
      <p>Scale</p>
      <Scale />
    </>
  );
}

export default App;
