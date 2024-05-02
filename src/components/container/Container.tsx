import React from 'react'

const Container = ({ children, addClass }: IContainerProps) => {
  return <div className={`w-full px-[5%] ${addClass}`}>{children}</div>
}

interface IContainerProps {
  children?: React.ReactNode
  addClass?: string // additonal class names
}

export default Container
