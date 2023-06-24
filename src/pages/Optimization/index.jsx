import { WillChange } from '../../components/Optimization/WillChange'
import { MovimientoReducido } from '../../components/Optimization/MovimientoReducido'

function Optimization() {
  return (
    <div>
      <p>Aceleración de Hardware y la propiedad will change</p>
      <WillChange />
      <p>Preferencias de Movimiento Reducido</p>
      <MovimientoReducido />
    </div>
  )
}

export { Optimization }