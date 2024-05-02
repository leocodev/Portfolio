import type React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../App'
import Footer from '../footer'
import Header from '../header'

const Layout = ({ children }: ILayoutProps) => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={`relative min-h-screen overflow-auto text-white transition-all duration-1000 ${theme.backgroundColor}`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

interface ILayoutProps {
  children: React.ReactNode
}

export default Layout
