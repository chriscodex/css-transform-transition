import { Scale } from '../../components/Transform/Scale'
import { Translate } from '../../components/Transform/Translate'
import { Skew } from '../../components/Transform/Skew'
import { Rotate } from '../../components/Transform/Rotate'
import { StylePerspective } from '../../components/Transform/StylePerspective'
import { BackfaceVisibility } from '../../components/Transform/BackfaceVisibility'
import './styles.css'

function Transform() {
  return (
    <div className='transform-page'>
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
    </div>
  )
}

export { Transform }