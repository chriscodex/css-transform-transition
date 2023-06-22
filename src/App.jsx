import './App.css';
import { Translate } from './components/Transform/Translate';
import { Scale } from './components/Transform/Scale';
import { Skew } from './components/Transform/Skew';
import { Rotate } from './components/Transform/Rotate';
import { StylePerspective } from './components/Transform/StylePerspective';
import { BackfaceVisibility } from './components/Transform/BackfaceVisibility';
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
      <p>Rotate & Origin</p>
      <Rotate />
      <p>Style & Perspective</p>
      <StylePerspective />
      <p>Backface Visibility</p>
      <BackfaceVisibility />
    </>
  );
}

export default App;
