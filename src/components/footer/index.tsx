import React from 'react'
import { FaPhone, FaEnvelope, FaSkype, FaMapMarkerAlt, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="mt-[1px] w-full items-center justify-between bg-black/80 p-5 text-white lg:px-[100px]">
      <div className="mx-auto max-w-[900px] 2xl:max-w-[1185px]">
        <div className="flex flex-col gap-y-4 text-sm md:flex-row md:justify-between">
          <div className="">
            <div className="mb-1 text-center text-base font-bold">Address</div>
            <div className="flex justify-center">
              <div className="">
                <div className="flex w-48 items-start gap-2">
                  <FaMapMarkerAlt className="h-[16px] w-[16px]" />
                  4896 Stoney Lane, Lewisville, TX 76692, United States
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mb-1 text-center text-base font-bold">Online Profiles</div>
            <div className="flex justify-center">
              <div>
                <div className="flex items-center gap-2">
                  <FaGithub />
                  <a href="https://github.com/OxLeOx/" rel="noreferrer" target="_blank">
                    https://github.com/OxLeOx/
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mb-1 text-center text-base font-bold">Contact</div>
            <div className="flex justify-center">
              <div className="flex flex-col gap-y-1">
                <div className="flex items-center gap-2">
                  <FaPhone />
                  <a href="tel:+12542324422" rel="noreferrer" target="_blank">
                    (254) 232-4422
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope />
                  <a href="mailto:leoh.laxon14@gmail.com" rel="noreferrer" target="_blank">
                    leoh.laxon14@gmail.com
                  </a>
                </div>
                {/* <div className="flex items-center gap-2">
                  <FaSkype />
                  <a href="skype:live:.cid.ac1dbc1743f71fba?chat" rel="noreferrer" target="_blank">
                    live:.cid.ac1dbc1743f71fba
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
