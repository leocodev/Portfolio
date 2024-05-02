import React from 'react'
import SectionContainer from '../components/section-container'
import SectionTitle from '../components/section-title'
import ReferenceCard from '../components/Reference/reference-card'

const references = [
  {
    avatar: 'assets/images/reference/bigboss.jpeg',
    title: 'BigBoss(Allen Eubank)',
    subtitle: 'Project Manager, Send Foundation',
    link: 'bigboss@metalrodeo.xyz',
    href: 'mailto:bigboss@metalrodeo.xyz',
    // secondaryLink: 'Discord: zeroxbigboss',
    // secondaryHref: 'https://discordapp.com/users/916040064541278240',
  },
  {
    avatar: 'assets/images/reference/michael.jpeg',
    title: 'Michael Marshall',
    subtitle: 'Project Manager, ETEN Innovation Lab',
    link: 'www.linkedin.com/in/michaelmarshall6',
    href: 'https://www.linkedin.com/in/michaelmarshall6',
  },
  {
    avatar: 'assets/images/reference/kyle.jpeg',
    title: 'Kyle LeMaster',
    subtitle: 'Lead Creative Director, Fueled on Bacon',
    link: 'www.linkedin.com/in/kyle-lemaster-37951524',
    href: 'https://www.linkedin.com/in/kyle-lemaster-37951524',
  },
]

const ReferenceSection = () => {
  return (
    <SectionContainer addClass="bg-[linear-gradient(rgba(0,0,0,0.8),#000)]" id="reference">
      <SectionTitle>References</SectionTitle>
      <div className="mx-auto mb-12 mt-10 flex max-w-[900px] flex-col gap-10 md:mt-0 md:gap-8 2xl:max-w-[1185px]">
        {references.map((ref, i) => (
          <ReferenceCard key={ref.title} {...ref} />
        ))}
      </div>
    </SectionContainer>
  )
}

export default ReferenceSection
