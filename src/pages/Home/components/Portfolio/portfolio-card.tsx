import React, { useContext } from 'react'
import { Button as MUIButton, Tooltip as MUITooltip } from '@material-tailwind/react'
import { ThemeContext } from '../../../../App'

const PortfolioCard = ({ title, image, tools, description, link, github }: IPortfolioCardProps) => {
  const theme = useContext(ThemeContext)

  return (
    <div className="flex flex-col">
      <div className="relative grow">
        <img src={image} alt={title} className="h-full w-full rounded-t-[4px]" />
        <div className="absolute bottom-0 w-full bg-[#000000aa] p-4">{title}</div>
      </div>
      <div className="-my-5 flex justify-end gap-1 px-4">
        {Object.entries(tools).map(([tool, img], i) => {
          return (
            <MUITooltip
              content={tool}
              placement="bottom"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 0 },
              }}
              key={tool}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <MUIButton
                className={
                  'z-[1] h-10 w-10 rounded-full bg-[#272727] p-2 shadow-black hover:shadow-black focus:shadow-md focus:shadow-black'
                }
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <span className={`h-6 w-6 bg-contain bg-center bg-no-repeat p-3 ${img}`} />
              </MUIButton>
            </MUITooltip>
          )
        })}
      </div>
      <div className="flex min-h-[100px] grow flex-col justify-between rounded-b-[4px] bg-[#22222280]">
        <div className="px-4 pt-6 text-sm text-[#ffffffb0]">{description}</div>
        <div className="p-2">
          <a href={link} className="h-full w-full" rel="noreferrer" target="_blank">
            <MUIButton
              className={`rounded-[4px] bg-transparent p-2 font-[Roboto,sans-serif] text-[14px] font-medium tracking-widest shadow-none transition-all duration-1000 hover:shadow-none ${theme.checkColor}`}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              LIVE DEMO
            </MUIButton>
          </a>
          {github && (
            <a href={github} className="ml-2 h-full w-full" rel="noreferrer" target="_blank">
              <MUIButton
                className={`rounded-[4px] bg-transparent p-2 font-[Roboto,sans-serif] text-[14px] font-medium tracking-widest shadow-none transition-all duration-1000 hover:shadow-none ${theme.checkColor}`}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                GITHUB
              </MUIButton>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

interface IPortfolioCardProps {
  title: string
  image: string
  tools: object
  description: string
  link: string
  github: string
}

export default PortfolioCard
