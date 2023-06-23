import './styles.css'
import { Duration } from '../../components/Transition/Duration'
import { TimingDelay } from '../../components/Transition/TimingDelay'

function Transition() {
  return (
    <div>
      <p>Property & Duration</p>
      <Duration />
      <p>Timing & Delay</p>
      <TimingDelay />
    </div>
  )
}

export { Transition }