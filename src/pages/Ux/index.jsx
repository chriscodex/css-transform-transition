import { Action } from '../../components/UX/Action'
import { WaitTime } from '../../components/UX/WaitTime'

function Ux() {
  return (
    <div>
      <p>Movimiento impulsado por la acción</p>
      <Action />
      <p>Tiempos de espera</p>
      <WaitTime />
    </div>
  )
}

export { Ux }