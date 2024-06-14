import React from "react"
import { GrFacebookOption, GrGithub, GrLinkedinOption } from "react-icons/gr"
import { FaWhatsapp } from "react-icons/fa"
const SocialLinks = () => {
  return (
    <div className="flex gap-5 text-white text-xl">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Badhon303"
        className="border-[1px] border-white p-[12px] rounded-full hover:border-primary hover:text-primary transition duration-300"
      >
        <GrGithub />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/minul-alam-8aa7b810b/"
        className="border-[1px] border-white p-[12px] rounded-full hover:border-primary hover:text-primary transition duration-300"
      >
        <GrLinkedinOption />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/badhon.alam303"
        className="border-[1px] border-white p-[12px] rounded-full hover:border-primary hover:text-primary transition duration-300"
      >
        <GrFacebookOption />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://wa.me/8801783558935/"
        className="border-[1px] border-white p-[12px] rounded-full hover:border-primary hover:text-primary transition duration-300"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}

export default SocialLinks
