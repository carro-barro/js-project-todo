import Lottie from "lottie-react"
import confetti from "../../assets/Confetti Day.json"

export const ConfettiAnimation = ({ onComplete }) => {
  return (
    <Lottie
      animationData={confetti}
      loop={false}
      onComplete={onComplete}
      style={{
        width: '100vw',
        height: '100vw',
        maxWidth: '600px',
        maxHeight: '600px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 20
      }}
    />
  )
}