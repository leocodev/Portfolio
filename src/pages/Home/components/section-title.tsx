import type React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../../App'

const SectionTitle = ({ children }: ISectionTitleProps) => {
  const theme = useContext(ThemeContext)

  return (
    <div
      className="mb-5 mt-10 text-center font-['Merriweather',serif] text-[48px] transition-all duration-1000 md:text-[64px]"
      style={{
        textShadow: `${theme.sectionTitleShadow[0]} 0px 0px 5px,
          ${theme.sectionTitleShadow[3]} 0px 0px 40px,
          ${theme.sectionTitleShadow[4]} 0px 0px 60px,
          ${theme.sectionTitleShadow[5]} 0px 0px 80px`,
      }}
    >
      {children}
    </div>
  )
}

interface ISectionTitleProps {
  children: React.ReactNode
}

export default SectionTitle
