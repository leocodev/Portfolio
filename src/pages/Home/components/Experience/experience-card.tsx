import React from 'react'

const ExperienceCard = ({
  logo,
  title,
  subtitle,
  date,
  location,
  description,
}: IExperienceCardProps) => {
  return (
    <div className="rounded-[4px] bg-[#22222280]">
      <div className="relative flex gap-4 p-4">
        <div className="absolute h-16 w-16 translate-x-[16px] translate-y-[-48px] md:static md:translate-x-0 md:translate-y-0">
          <div className="h-full w-full border-[3px] border-b-[#cccccc] border-l-white border-r-[#cccccc] border-t-white">
            <img src={logo} alt={title} className="h-full w-full" />
          </div>
        </div>
        <div className="flex grow flex-col-reverse justify-between md:flex-row">
          <div className="flex flex-col justify-between">
            <div className="text-2xl">{title}</div>
            <div className="text-base text-gray-500 md:text-xl">{subtitle}</div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-end text-base md:text-xl">{date}</div>
            <div className="hidden text-right text-base md:block">{location}</div>
          </div>
        </div>
      </div>
      {description && (
        <div className="flex flex-col gap-1 border-t border-t-[#ffffff1a] p-4 text-gray-500">
          {description.map((desc, i) => (
            <div key={i}>
              {desc.map((d, j) => (
                <span key={j}>{d}</span>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

interface IExperienceCardProps {
  logo: string
  title: string
  subtitle: string
  date: string
  location: string
  description?: Array<Array<string | React.ReactNode>>
}

export default ExperienceCard
