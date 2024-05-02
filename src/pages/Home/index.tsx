import React from 'react'
import ExperienceSection from './sections/experience'
import HomeSection from './sections/home'
import PortfolioSection from './sections/portfolio'
import SkillsSection from './sections/skills'
import ReferenceSection from './sections/reference'

const Dashboard = () => {
  return (
    <div className={`transition-all duration-1000`}>
      <HomeSection />
      <SkillsSection />
      <ExperienceSection />
      <ReferenceSection />
      <PortfolioSection />
    </div>
  )
}

export default Dashboard
