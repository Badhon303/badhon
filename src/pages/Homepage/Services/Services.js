import React from "react"
import SectionTitle from "../../../components/Typography/SectionTitle"
// import { SiReact } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { HiOutlineCode } from "react-icons/hi"
import { FiCodesandbox } from "react-icons/fi"
import SectionHead from "../../../components/Typography/SectionHead"

const Services = () => {
  const services = [
    {
      id: 1,
      service: "Next JS Development",
      details:
        "I can transform design mockups (PSD, Figma) into pixel-perfect, responsive web applications using modern frontend technologies like Next JS, Tailwind, Redux, Zustand, Shadcn UI. I prioritize clean, maintainable code and optimal user experiences.",
    },
    {
      id: 2,
      service: "Backend Development",
      details:
        "I have a strong foundation in building robust and scalable backend systems using Node, Express, Hono js. I can design and implement RESTful APIs to power data-driven applications, leveraging databases like MySQL, PostgreSQL, SQLite and MongoDB.",
    },
    {
      id: 3,
      service: "Deployment",
      details:
        "As a full-stack developer, I can build end-to-end web applications. I have experience with the tools like Git, Docker, cloud platforms, Nginx, Pm2, Certbot etc. This allows me to handle everything from front-end design to back-end development and deployment.",
    },
  ]
  const props = {
    img: "https://cdn.lordicon.com/ofwpzftr.json",
    text: "Services",
  }
  return (
    <section id="services" className="mb-32">
      <SectionTitle props={props} />
      <SectionHead>
        My <span className="text-primary">Specializations</span>
      </SectionHead>
      <div className="services">
        {services.map(({ service, details }, index) => (
          <div
            key={index}
            className="hover:text-primary hover:border-primary border-[1px] border-accent p-6 rounded-2xl"
            data-aos="fade-up"
            data-aos-delay={`${(index % 6) * 100 + 100}`}
          >
            {index === 0 && <TbBrandNextjs className="text-[40px]" />}
            {index === 1 && <HiOutlineCode className="text-[40px]" />}
            {index === 2 && <FiCodesandbox className="text-[40px]" />}
            <div>
              <h2 className="lg:text-2xl md:text-2xl text-xl mt-3 lg:font-normal md:font-normal font-bold">
                {service}
              </h2>
              <p className="text-white mt-3 text-sm">{details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
