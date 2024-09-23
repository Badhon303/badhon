import React from "react"
import SectionTitle from "../../../components/Typography/SectionTitle"
import SectionHead from "../../../components/Typography/SectionHead"

const Experience = () => {
  const props = {
    img: "https://cdn.lordicon.com/winbdcbm.json",
    text: "Experience",
  }
  const experience = [
    {
      duration: "July 2024 - Present",
      company: "FinTechHub Limited",
      role: "Principal Software Engineer",
      description:
        "Led the full-stack development process for new web applications, translating user needs into actionable business requirements. Delivered successful Proof-of-Concepts (PoCs), prototypes, Minimum Viable Products (MVPs), and pilot roll-outs with iterative user testing and validation. Possess extensive experience (4+ years) as a Full-Stack Developer utilizing JavaScript/Python and their frameworks. Built web applications from scratch, ensuring functionality, responsiveness, and user-friendliness across various devices.",
    },
    {
      duration: "July 2019 - June 2024",
      company: "LEADS Corporation Limited",
      role: "Sr. Software Engineer",
      description:
        "Played an active role in all aspects of the development process of a new application including identification of user needs into business requirements.PoC, prototyping, MVP, pilot roll-out with iterative end user validation and commercial deployment of AI, Blockchain and IoT projects. Full StackDeveloper with over 4 years of experience in JavaScript/Python and their frameworks. Developed web-apps from scratch.",
    },
    {
      duration: "September 2018 - July 2019",
      company: "eGeneration Limited",
      role: "Data Science Enthusiast",
      description:
        "Have understanding of Machine Learning, AI, data visualization and ETL processes. Collected, cleaned, analyzed data and worked with algorithms and statistical models to extract meaningful insights from large datasets. skilled in implementing machine learning frameworks and proficient in data visualization tools like Tableau, Matplotlib etc.",
    },
    {
      duration: "January 2017 - September 2018",
      company: "DataSoft Systems Bangladesh Limited",
      role: "IoT Engineer",
      description:
        "Designed and developed IoT end-to-end solutions using micro-controllers, cloud technology, and web-services. Developed RESTful APIs, MQTT brokers, and data analytics and visualization dashboards. Designed PCBs and circuits for IoT devices. Worked with a variety of sensors and actuators.",
    },
    {
      duration: "December 2011 - December 2015",
      company: "EAST WEST UNIVERSITY",
      role: "B.Sc. in Electrical and Electronic Engineering",
      description: "CGPA: 3.04",
    },
    {
      duration: "2009 - 2011",
      company: "Rangpur Government College",
      role: "Science",
      description: "GPA: 4.50",
    },
    {
      duration: "2009 - 2011",
      company: "Rangpur Zilla School",
      role: "Science",
      description: "GPA: 5.00",
    },
  ]
  return (
    <section id="resume">
      <SectionTitle props={props} />
      <SectionHead>
        Education & <span className="text-primary">Experience</span>
      </SectionHead>

      {experience?.map(({ duration, company, role, description }, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={`${(index % 6) * 100 + 100}`}
        >
          <div className="relative pl-[74px] pb-[68px] opacity-100 translate-x-0 translate-y-0">
            <div className="absolute w-3 h-3 transition-[0.3s] rounded-[50%] -left-1.5 top-[7px] bg-primary"></div>
            <span className="block transition-[0.3s] mb-7 text-primary">
              {duration}
            </span>
            <h2 className="text-2xl font-light text-white mb-[5px]">
              {company}
            </h2>
            {/* <p className="text-[13px] text-[#999999] mb-[18px]">{company}</p> */}
            <h2 className="text-xl font-light text-white mb-[5px]">{role}</h2>
            <p className="text-[14px] text-justify text-[#999999] mb-[18px]">
              {description}
            </p>
            <div className="w-px h-full absolute z-[-1] left-0 top-2.5 bg-[#333333]"></div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experience
