import React from 'react'

const GridContainer = ({ children, addClass }: IContainerProps) => {
  return (
    <div
      className={`mx-auto grid max-w-[900px] grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:grid-cols-3 2xl:max-w-[1185px] ${addClass}`}
    >
      {children}
    </div>
  )
}

interface IContainerProps {
  children?: React.ReactNode
  addClass?: string // additonal class names
}

export default GridContainer
