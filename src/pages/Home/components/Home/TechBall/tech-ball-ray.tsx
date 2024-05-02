import React from 'react'

const rays = [
  { height: '119.231%', width: '5.49039%', left: '59.7545%', opacity: 0.984628 },
  { height: '113.259%', width: '5.41573%', left: '77.7785%', opacity: 0.865176 },
  { height: '102.223%', width: '5.27779%', left: '91.5735%', opacity: 0.644456 },
  { height: '87.8036%', width: '5.09755%', left: '99.0393%', opacity: 0.356072 },
  { height: '87.8036%', width: '5.09755%', left: '0.960736%', opacity: 0.356072 },
  { height: '102.223%', width: '5.27779%', left: '8.42652%', opacity: 0.644456 },
  { height: '113.259%', width: '5.41573%', left: '22.2215%', opacity: 0.865176 },
  { height: '119.231%', width: '5.49039%', left: '40.2455%', opacity: 0.984628 },
]

const animations = [
  { animationDelay: '1.99701s', animationDuration: '1.59761s' },
  { animationDelay: '3.60364s', animationDuration: '2.88291s' },
  { animationDelay: '1.72693s', animationDuration: '1.38154s' },
  { animationDelay: '2.38185s', animationDuration: '1.90548s' },
  { animationDelay: '3.2371s', animationDuration: '2.58968s' },
  { animationDelay: '2.33498s', animationDuration: '1.86798s' },
  { animationDelay: '2.08626s', animationDuration: '1.66901s' },
  { animationDelay: '2.15384s', animationDuration: '1.72307s' },
]

const TechBallRay = () => {
  return (
    <div>
      <div className="absolute inset-x-[-10%] bottom-[-10%] top-[-40%]">
        {rays.map((ray, index) => (
          <div
            className="absolute top-1/2 translate-x-[-50%] translate-y-[-50%]"
            style={ray}
            key={index}
          >
            <div
              className="absolute inset-x-0 h-1/2 animate-[ball-ray_linear_infinite] bg-[radial-gradient(hsla(0,0%,100%,0.53),hsla(0,0%,100%,0.13)30%,transparent_60%)] opacity-0"
              style={animations[index]}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechBallRay
