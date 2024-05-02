/* eslint-disable tailwindcss/no-contradicting-classname */
import React from 'react'
import ContactMe from '../components/Home/contact-me'
import TechBall from '../components/Home/TechBall'
import SectionContainer from '../components/section-container'

const HomeSection = () => {
  return (
    <SectionContainer
      addClass="relative
        z-[2]
        bg-top
        bg-no-repeat py-16
        before:pointer-events-none
        before:absolute
        before:inset-0
        before:z-[-1]
        before:bg-[radial-gradient(ellipse_at_top,hsla(0,0%,100%,0.26)0,transparent_30%,rgba(0,0,0,0.66)60%,rgba(0,0,0,0.8)66%)]
        before:bg-[length:200%_100%]
        before:bg-top
        after:pointer-events-none
        after:absolute
        after:inset-0
        after:z-[3]
        after:bg-[radial-gradient(ellipse_at_top,transparent_60%,#000_70%)]
        after:bg-[length:300%_100%]
        after:bg-top
        md:py-40"
      id="home"
    >
      <div className="m-auto flex w-full max-w-[1000px] flex-col gap-10 md:flex-row">
        <div className="flex basis-1/2 flex-col items-center justify-center">
          <div className="my-8 font-bold">
            <h1 className="mb-6 text-center text-[32px] lg:text-[44px]">Leo Laxon</h1>
            <div className="text-[24px] lg:text-[28px]">
              <h1>A Creative</h1>
              <h1>Web | Mobile</h1>
              <h1>Engineer</h1>
            </div>
          </div>
          <TechBall />
        </div>
        <div className="flex basis-1/2 justify-center">
          <ContactMe />
        </div>
      </div>
    </SectionContainer>
  )
}

export default HomeSection
