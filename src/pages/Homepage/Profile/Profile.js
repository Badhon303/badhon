import React from "react"
import profile from "../../../assets/images/badhon.jpg"
import SocialLinks from "../../../components/SocialLinks"

const Profile = () => {
  return (
    <div className="lg:w-[380px] border-[1px] border-[#bbb] rounded-3xl px-6 py-10 sticky top-16">
      <div className="flex justify-between mb-6">
        <h2 className="text-white text-4xl font-bold">Badhon</h2>
        <h2 className="text-white leading-[20px]">
          Full-Stack
          <br />
          Web Developer
        </h2>
      </div>
      <img
        src={profile}
        alt=""
        className="h-[400px] w-[250px] object-cover rounded-3xl mx-auto"
      />
      <div className="flex flex-col items-center">
        <h2 className="text-white text-lg mt-8">Badhon.Alam303@gmail.com</h2>
        <h2 className="text-white text-lg mt-2 mb-6">Dhaka, Bangladesh</h2>

        {/* SOCIAL MEDIA ICONS */}
        <SocialLinks />
        <a href="#contact">
          <button className="btn btn-wide btn-primary mt-8 text-white">
            Hire Me
          </button>
        </a>
      </div>
    </div>
  )
}

export default Profile
