import React, { AnchorHTMLAttributes } from 'react'

const ExternalLink = ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="text-blue-500 visited:text-[#6d4b8d] hover:text-white active:text-[#ff4040]"
      {...props}
    >
      {children}
    </a>
  )
}

export default ExternalLink
