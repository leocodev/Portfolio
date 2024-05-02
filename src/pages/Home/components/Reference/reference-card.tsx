import React from 'react'
import ExternalLink from '../external-link'

const ReferenceCard = ({
  avatar,
  title,
  subtitle,
  link,
  href,
  secondaryLink,
  secondaryHref,
}: IReferenceCardProps) => {
  return (
    <div className="rounded-[4px] bg-[#22222280]">
      <div className="relative flex gap-4 p-4">
        <div className="absolute h-16 w-16 translate-x-[16px] translate-y-[-48px] md:static md:translate-x-0 md:translate-y-0">
          <div className="relative h-full w-full rounded-full border-[2px] border-white">
            <img src={avatar} alt={title} className="h-full w-full rounded-full" />
            <div className="absolute top-0 h-full w-full rounded-full shadow-[inset_2px_2px_6px_2px_rgba(0,0,0,0.8)]" />
          </div>
        </div>
        <div className="flex grow flex-col justify-between gap-4 pt-4 md:flex-row md:pt-0">
          <div className="flex flex-col justify-between">
            <p className="text-xl md:text-2xl">{title}</p>
            <div className="text-base text-gray-500 md:text-xl">{subtitle}</div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex text-sm md:justify-end md:text-base">
              <ExternalLink href={href} target="_self">
                {link}
              </ExternalLink>
            </div>
            <div className="text-sm md:text-right md:text-base">
              <ExternalLink href={secondaryHref}>{secondaryLink}</ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface IReferenceCardProps {
  avatar: string
  title: string
  subtitle: string
  link?: string
  href?: string
  secondaryLink?: string
  secondaryHref?: string
}

export default ReferenceCard
