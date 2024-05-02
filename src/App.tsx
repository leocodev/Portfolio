import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/layout/layout'
import Dashboard from './pages/Home'
import Page404 from './pages/Page404'

const themes = [
  {
    title: 'react',
    logo: 'bg-[url(../public/assets/images/logos/react.svg)]',
    backgroundColor: 'bg-[midnightblue]',
    progressbarColor: 'bg-[#2196f3]',
    checkColor: 'text-[#2196f3]',
    dropShadow: 'drop-shadow-react',
    sectionTitleShadow: ['white', 'white', 'white', 'cyan', 'blue', 'midnightblue'],
    buttonColor: 'light-blue',
  },
  {
    title: 'next',
    logo: 'bg-[url(../public/assets/images/logos/nextjs.png)]',
    backgroundColor: 'bg-[black]',
    progressbarColor: 'bg-[#000000]',
    checkColor: 'text-[#999999]',
    dropShadow: 'drop-shadow-next',
    sectionTitleShadow: ['white', 'white', 'white', 'lightgrey', 'grey', 'darkgrey'],
    buttonColor: 'gray',
  },
  {
    title: 'vue',
    logo: 'bg-[url(../public/assets/images/logos/vue.svg)]',
    backgroundColor: 'bg-[darkgreen]',
    progressbarColor: 'bg-[#4caf50]',
    checkColor: 'text-[#4caf50]',
    dropShadow: 'drop-shadow-vue',
    sectionTitleShadow: ['white', 'white', 'white', 'yellowgreen', 'green', 'darkgreen'],
    buttonColor: 'green',
  },
  // {
  //   title: 'angular',
  //   logo: 'bg-[url(../public/assets/images/logos/angular.svg)]',
  //   backgroundColor: 'bg-[maroon]',
  //   progressbarColor: 'bg-[#ff5252]',
  //   checkColor: 'text-[#ff5252]',
  //   dropShadow: 'drop-shadow-angular',
  //   sectionTitleShadow: ['white', 'white', 'yellow', 'tomato', 'red', 'maroon'],
  //   buttonColor: 'red',
  // },
  {
    title: 'node',
    logo: 'bg-[url(../public/assets/images/logos/node.svg)]',
    backgroundColor: 'bg-[darkgreen]',
    progressbarColor: 'bg-[#4caf50]',
    checkColor: 'text-[#4caf50]',
    dropShadow: 'drop-shadow-node',
    sectionTitleShadow: ['white', 'white', 'white', 'lightgreen', 'green', 'darkgreen'],
    buttonColor: 'green',
  },
  {
    title: 'html',
    logo: 'bg-[url(../public/assets/images/logos/html5.svg)]',
    backgroundColor: 'bg-[chocolate]',
    progressbarColor: 'bg-[#ff5722]',
    checkColor: 'text-[#ff5722]',
    dropShadow: 'drop-shadow-html',
    sectionTitleShadow: ['white', 'white', 'white', 'yellow', 'darkorange', 'chocolate'],
    buttonColor: 'orange',
  },
  {
    title: 'css',
    logo: 'bg-[url(../public/assets/images/logos/css3.svg)]',
    backgroundColor: 'bg-[midnightblue]',
    progressbarColor: 'bg-[#2196f3]',
    checkColor: 'text-[#2196f3]',
    dropShadow: 'drop-shadow-css',
    sectionTitleShadow: ['white', 'white', 'cyan', 'lightblue', 'blue', 'midnightblue'],
    buttonColor: 'blue',
  },
]

export const ThemeContext = createContext(themes[0])

const App = () => {
  const [curThemeIndex, setCurThemeIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurThemeIndex((prevThemeIndex) => (prevThemeIndex + 1) % themes.length)
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <ThemeContext.Provider value={themes[curThemeIndex]}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeContext.Provider>
  )
}

export default App
