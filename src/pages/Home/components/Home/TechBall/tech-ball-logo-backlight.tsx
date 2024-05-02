import React, { useContext } from 'react'
import { ThemeContext } from '../../../../../App'

const TechBallLogoBacklight = () => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={`absolute inset-0 animate-[tech-ball-fade_linear_infinite_5s] bg-contain bg-[center] bg-no-repeat blur-[20px] brightness-200
        ${theme.dropShadow}
        ${theme.logo}
      `}
    />
  )
}

export default TechBallLogoBacklight
