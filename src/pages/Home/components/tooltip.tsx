import type React from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { Button as MUIButton, Tooltip as MUITooltip } from '@material-tailwind/react'
import type { color } from '@material-tailwind/react/types/components/button'

const Tooltip = ({ children, id, title, href, bgColor }: ITooltipProps) => {
  return (
    <div>
      <MUITooltip
        content={title}
        placement="bottom"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 0 },
        }}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <MUIButton
          className="inline-flex h-10 w-10 rounded-full p-0"
          id={id}
          color={bgColor}
          variant="gradient"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <a
            href={href}
            className="flex h-full w-full items-center"
            rel="noreferrer"
            target="_blank"
          >
            {children}
          </a>
        </MUIButton>
      </MUITooltip>
      {/* <ReactTooltip
        anchorId={id}
        content={title}
        place="bottom"
        noArrow
        style={{ backgroundColor: bgColor, fontSize: 16 }}
      ></ReactTooltip> */}
    </div>
  )
}

interface ITooltipProps {
  children: React.ReactElement
  id: string
  title: string
  href?: string
  bgColor: color
}

export default Tooltip
