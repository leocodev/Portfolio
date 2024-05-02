import React from 'react'
import TechBallLogo from './tech-ball-logo'
import TechBallLogoBacklight from './tech-ball-logo-backlight'
import TechBallRay from './tech-ball-ray'

const TechBall = () => {
  return (
    <div className="relative h-40 w-40">
      <TechBallLogoBacklight />
      <TechBallLogo />
      <TechBallRay />
    </div>
  )
}

export default TechBall
