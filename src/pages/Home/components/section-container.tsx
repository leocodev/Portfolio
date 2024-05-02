import React from 'react'

const SectionContainer = ({ children, id, addClass }: IContainerProps) => {
  return (
    <div id={id} className={`px-5 py-12 ${addClass}`}>
      {children}
    </div>
  )
}

interface IContainerProps {
  children?: React.ReactNode
  id?: string
  addClass?: string // additonal class names
}

export default SectionContainer
