import React from 'react'
import ExperienceCard from '../components/Experience/experience-card'
import SectionContainer from '../components/section-container'
import SectionTitle from '../components/section-title'
import ExternalLink from '../components/external-link'

const experiences = [
  {
    logo: 'assets/images/companies/send.png',
    title: 'Senior Web3 Frontend Engineer',
    subtitle: 'Send Foundation',
    date: 'Sep 2023 - Present',
    location: 'Cheyenne, WY',
    description: [
      [
        'Built an open-source MVP product - ',
        <ExternalLink href="https://github.com/0xsend/sendapp" key={'sendapp'}>
          Send App
        </ExternalLink>,
        ' - a simple app to send ETH and ERC20 tokens',
      ],
      [
        'Started from a monorepo based on ',
        <ExternalLink href="https://tamagui.dev" key={'tamagui'}>
          Tamagui
        </ExternalLink>,
        ' + Expo + Next.js',
      ],
      ['Used Next.js for building the web version and Expo for app'],
      [
        'Created Tamagui UI component library compatible and reusable for both web & mobile version',
      ],
      ['Wrote unit tests using Jest and e2e tests using Playwright'],
    ],
  },
  {
    logo: 'assets/images/companies/etenlab.svg',
    title: 'Senior Full Stack Engineer',
    subtitle: 'ETEN Innovation Lab',
    date: 'Feb 2023 - Sep 2023',
    location: '',
    description: [
      [
        'Built a Bible translation app and an API server using Nest.js, Typescript, React, Ionic, and MUI',
      ],
      ['Implemented the Single Sign-On feature with Keycloak'],
      ['Developed a custom UI library powered by Storybook and Lerna'],
      [
        'Architected crowdsourcing data transfer protocols and implemented online and offline sync features using GraphQL',
      ],
      ['Documented the API services and development processes using Docusaurus'],
      ['Deployed microservices and applications to ECS and S3 buckets through AWS CDK & Terraform'],
      ['Built automatic testing CI through Github Actions & Docker Compose'],
    ],
  },
  {
    logo: 'assets/images/companies/fueledonbacon.png',
    title: 'Web3 Frontend Engineer',
    subtitle: 'Fueled on Bacon',
    date: 'Sep 2021 - Oct 2022',
    location: 'Tallahassee, FL',
    description: [
      [
        'Worked with Vue 2/3 | Nuxt 2/3 | React | Next.js and was involved in building UI/UX and making architectural decisions',
      ],
      [
        'Frontend Web3 integration, Smart Contract and Node/Express Backend for Dapps on EVM compatible networks',
      ],
      ['Worked in scrum method and participated in daily standups for sharing ideas and progress'],
    ],
  },
  {
    logo: 'assets/images/companies/mclane.jpg',
    title: 'Frontend Developer',
    subtitle: 'McLane Company',
    date: 'Feb 2018 - Oct 2020',
    location: 'Temple, TX',
    description: [
      ['Used React/Redux-Toolkit for front-end and Node/Express for back-end'],
      [
        'Used both Stylus and styled components for component styling, used component-container pattern',
      ],
      ['Worked on refactoring class components to functional components'],
    ],
  },
]

const educations = [
  {
    logo: 'assets/images/companies/charlotte.png',
    title: 'Bachelor of Engineering, Major in Computer Science',
    subtitle: 'University of North Carolina at Charlotte',
    date: '2013 - 2017',
    location: 'Charlotte, NC',
  },
]

const ExperienceSection = () => {
  return (
    <SectionContainer
      addClass="bg-[linear-gradient(rgba(0,0,0,0.66),rgba(0,0,0,0.8))]"
      id="experience"
    >
      <SectionTitle>Experience</SectionTitle>
      <div className="mx-auto mt-10 flex max-w-[900px] flex-col gap-10 md:mt-0 md:gap-8 2xl:max-w-[1185px]">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.title} {...exp} />
        ))}
      </div>
      <SectionTitle>Education</SectionTitle>
      <div className="mx-auto mt-10 flex max-w-[900px] flex-col gap-10 md:mt-0 md:gap-8 2xl:max-w-[1185px]">
        {educations.map((edu, i) => (
          <ExperienceCard key={edu.title} {...edu} />
        ))}
      </div>
    </SectionContainer>
  )
}

export default ExperienceSection
