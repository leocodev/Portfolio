import React, { useContext } from 'react'
import { FaCheck } from 'react-icons/fa'
import { ThemeContext } from '../../../../App'
import { Button as MUIButton, Tooltip as MUITooltip } from '@material-tailwind/react'

const SkillCard = ({ title, years, experience, tools }: ISkillCardProps) => {
  const theme = useContext(ThemeContext)

  return (
    <div className="rounded-b-[4px] bg-[#22222280]">
      <div
        className={`h-[10px] rounded-t-[4px]
          bg-[linear-gradient(135deg,hsla(0,0%,100%,.25)25%,transparent_0,transparent_50%,hsla(0,0%,100%,.25)0,hsla(0,0%,100%,.25)75%,transparent_0,transparent)]
          bg-[length:40px_40px]
          ${theme.progressbarColor}
          transition-all duration-1000`}
      />
      <div className="border-b border-b-[#ffffff1a] p-4 text-2xl font-bold">
        <h1>{title}</h1>
      </div>
      <div className="-mt-5 flex justify-end gap-1 px-4">
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
                  'h-10 w-10 rounded-full bg-[#272727] p-2 shadow-black hover:shadow-black focus:shadow-md focus:shadow-black'
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
      <div className="-mt-6 rounded-b-[4px] p-4">
        <div className="px-2 py-4 text-xs text-[#ffffffb4]">
          {years && `${years} years of experience`}
        </div>
        <ul className="px-4 text-base font-bold transition-all duration-1000">
          {experience.map((e, i) => (
            <li key={`${title}-${i + 1}`} className="flex items-center gap-6 py-2">
              <div>
                <FaCheck
                  className={`text-[30px] transition-all duration-1000 ${theme.checkColor}`}
                />
              </div>
              <div className="leading-[18px]">{e}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface ISkillCardProps {
  title: string
  years?: number
  experience: Array<string>
  tools: object
}

export default SkillCard
