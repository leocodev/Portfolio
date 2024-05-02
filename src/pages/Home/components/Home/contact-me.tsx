import { Button as MUIButton } from '@material-tailwind/react'
import type { color } from '@material-tailwind/react/types/components/button'
import React, { type ChangeEvent, useContext, useState } from 'react'
import { FaRegNewspaper, FaLinkedin, FaPhone, FaEnvelope, FaSkype, FaGithub } from 'react-icons/fa'
import { ThemeContext } from '../../../../App'
import Input from '../input'
import TextArea from '../textarea'
import Tooltip from '../tooltip'

const ContactMe = () => {
  const theme = useContext(ThemeContext)
  const [email, setEmail] = useState({
    name: '',
    subject: '',
    message: '',
  })

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEmail({ ...email, [name]: value })
  }

  return (
    <div className="h-[590px] w-full max-w-[380px] text-ellipsis rounded-[10px] bg-[linear-gradient(105deg,rgba(0,0,0,0.53),rgba(0,0,0,0.6),rgba(0,0,0,0.4),rgba(0,0,0,0.6),rgba(0,0,0,0.53))] px-5 py-8 text-center shadow-[5px_5px_15px_rgba(0,0,0,0.53)]">
      <h2 className="mb-3 text-2xl font-bold">Contact Me</h2>
      <Input placeholder="Your Name" value={email.name} name="name" onChange={inputChangeHandler} />
      <Input
        placeholder="Subject"
        value={email.subject}
        name="subject"
        onChange={inputChangeHandler}
      />
      <TextArea
        placeholder="Your message here..."
        value={email.message}
        name="message"
        onChange={inputChangeHandler}
      />
      <p className="mb-4 mt-5 text-gray-500">
        Just gimme a shout if you wanna chat about what we can put together 🤝
      </p>
      <a
        href={`mailto:leoh.laxon14@gmail.com?subject=${email.subject}&body=${email.message}%0D%0A%0D%0A${email.name}`}
      >
        <MUIButton
          color={theme.buttonColor as color}
          className={'py-2 text-[14px] transition-all duration-1000'}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          SEND MESSAGE
        </MUIButton>
      </a>
      <div className="mt-5 flex w-full">
        {/* <div className="w-full">
          <Tooltip
            id="tooltip-linkedin"
            title="https://www.linkedin.com/in/leo-laxon"
            href="https://www.linkedin.com/in/leo-laxon"
            bgColor="blue"
          >
            <FaLinkedin className="m-auto h-6 w-6" />
          </Tooltip>
        </div> */}
        <div className="w-full">
          <Tooltip
            id="tooltip-cv"
            title="Resume"
            href="https://drive.google.com/file/d/1XozrAyJcdZ9UGq4frOTAsSZZXrsxU-p1/view?usp=sharing"
            bgColor="teal"
          >
            <FaRegNewspaper className="m-auto h-6 w-6" />
          </Tooltip>
        </div>
        <div className="w-full">
          <Tooltip
            id="tooltip-phone"
            title="(571) 577-4552"
            href="tel:+15715774552"
            bgColor="green"
          >
            <FaPhone className="m-auto h-6 w-6" />
          </Tooltip>
        </div>
        <div className="w-full">
          <Tooltip
            id="tooltip-mail"
            title="leoh.laxon14@gmail.com"
            href="mailto:leoh.laxon14@gmail.com"
            bgColor="red"
          >
            <FaEnvelope className="m-auto h-6 w-6" />
          </Tooltip>
        </div>
        <div className="w-full">
          <Tooltip
            id="tooltip-skype"
            title="live:.cid.ac1dbc1743f71fba"
            href="skype:live:.cid.ac1dbc1743f71fba?chat"
            bgColor="light-blue"
          >
            <FaSkype className="m-auto h-6 w-6" />
          </Tooltip>
        </div>
        <div className="w-full">
          <Tooltip
            id="tooltip-github"
            title="https://www.github.com/OxLeOx/"
            href="https://www.github.com/OxLeOx/"
            bgColor="gray"
          >
            <FaGithub className="m-auto h-6 w-6" />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
