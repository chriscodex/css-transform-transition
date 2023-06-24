import { Action } from '../../components/UX/Action'
import { WaitTime } from '../../components/UX/WaitTime'
import { Parpadeo } from '../../components/UX/Parpadeo'

function Ux() {
  return (
    <div>
      <p>Movimiento impulsado por la acción</p>
      <Action />
      <p>Tiempos de espera</p>
      <WaitTime />
      <p>Problema de parpadeo</p>
      <Parpadeo />
    </div>
  )
}

export { Ux }