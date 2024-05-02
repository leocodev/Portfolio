import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button as MUIButton } from '@material-tailwind/react'

const Header = () => {
  const [isScrollTop, setIsScrollTop] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setIsScrollTop(window.pageYOffset > 0))
    }
  }, [])

  return (
    <header
      className={`fixed top-0 z-10 flex h-14 w-full items-center justify-between overflow-hidden bg-transparent px-10 text-white transition-all duration-1000 ${
        isScrollTop && 'bg-[#00000090] shadow-[1px_1px_8px_#000000]'
      }`}
    >
      <div className="flex items-center justify-center text-base font-bold">
        <MUIButton
          className={
            'rounded-[4px] bg-transparent p-2 text-base font-bold tracking-widest shadow-none hover:shadow-none'
          }
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Link to="/" className="">
            Leo Laxon
          </Link>
        </MUIButton>
      </div>
      <div className="hidden gap-4 text-sm uppercase md:flex">
        <a href="#home" className="">
          <MUIButton
            className={
              'rounded-[4px] bg-transparent p-2 text-sm font-normal tracking-widest shadow-none hover:shadow-none'
            }
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Home
          </MUIButton>
        </a>
        <a href="#skills" className="">
          <MUIButton
            className={
              'rounded-[4px] bg-transparent p-2 text-sm font-normal tracking-widest shadow-none hover:shadow-none'
            }
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Skills
          </MUIButton>
        </a>
        <a href="#experience" className="">
          <MUIButton
            className={
              'rounded-[4px] bg-transparent p-2 text-sm font-normal tracking-widest shadow-none hover:shadow-none'
            }
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Experience
          </MUIButton>
        </a>
        <a href="#reference" className="">
          <MUIButton
            className={
              'rounded-[4px] bg-transparent p-2 text-sm font-normal tracking-widest shadow-none hover:shadow-none'
            }
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Reference
          </MUIButton>
        </a>
        <a href="#portfolio" className="">
          <MUIButton
            className={
              'rounded-[4px] bg-transparent p-2 text-sm font-normal tracking-widest shadow-none hover:shadow-none'
            }
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Portfolio
          </MUIButton>
        </a>
      </div>
      <MUIButton
        className="relative h-10 w-10 rounded-full bg-transparent p-2 text-white shadow-none hover:shadow-none focus:outline-none md:hidden"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <span className="sr-only">Open main menu</span>
        <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-5 -translate-y-1.5 rounded-md bg-current"
          />
          <span aria-hidden="true" className="absolute block h-0.5 w-5 rounded-md bg-current" />
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-5 translate-y-1.5 rounded-md bg-current"
          />
        </div>
      </MUIButton>
    </header>
  )
}

export default Header
