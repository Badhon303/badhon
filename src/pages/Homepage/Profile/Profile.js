import React from "react"
import profile from "../../../assets/images/badhon-ai.png"
import SocialLinks from "../../../components/SocialLinks"

const Profile = () => {
  return (
    <div className="lg:w-[380px] h-[90svh] border-[1px] border-accent rounded-3xl px-6 py-10 sticky top-16 flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full mb-6">
          <h2 className="text-accent text-4xl font-bold">Badhon</h2>
          <h2 className="text-white leading-[20px] text-right">
            Full-Stack
            <br />
            Web Developer
          </h2>
        </div>
        <img
          src={profile}
          alt="badhon"
          className="h-[40svh] object-cover rounded-3xl"
        />
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-accent text-lg">Badhon.Alam303@gmail.com</h2>
          <h2 className="text-white text-lg mt-2 mb-6">Dhaka, Bangladesh</h2>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {/* SOCIAL MEDIA ICONS */}
        <SocialLinks />
        <a href="#contact">
          <button className="btn btn-wide btn-primary mt-6 text-white">
            Hire Me
          </button>
        </a>
      </div>
    </div>
  )
}

export default Profile
