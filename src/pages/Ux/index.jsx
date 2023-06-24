import { Action } from '../../components/UX/Action'
import { WaitTime } from '../../components/UX/WaitTime'
import { Parpadeo } from '../../components/UX/Parpadeo'
import { WillChange } from '../../components/UX/WillChange'

function Ux() {
  return (
    <div>
      <p>Movimiento impulsado por la acción</p>
      <Action />
      <p>Tiempos de espera</p>
      <WaitTime />
      <p>Problema de parpadeo</p>
      <Parpadeo />
      <p>Aceleración de Hardware y la propiedad will change</p>
      <WillChange />
    </div>
  )
}

export { Ux }