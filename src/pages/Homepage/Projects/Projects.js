// import { useQuery } from "@tanstack/react-query"
import ProjectCard from "../../../components/Cards/ProjectCard"
import React, { useState } from "react"
import ProjectModal from "../../../components/Modals/ProjectModal"
import SectionTitle from "../../../components/Typography/SectionTitle"
import SectionHead from "../../../components/Typography/SectionHead"
import { Link } from "react-router-dom"

const Projects = () => {
  const [modal, setModal] = useState([])
  //   const { data: projects = [] } = useQuery({
  //     queryKey: ["projects"],
  //     queryFn: async () => {
  //       const res = await fetch(
  //         "https://portfolio-backend-sepia-seven.vercel.app/projects"
  //       )
  //       const data = await res.json()
  //       console.log("Projects: ", data)
  //       return data
  //     },
  //   })
  const projects = [
    {
      _id: "6431e0df5a895e0e9b327c22",
      name: "Smart-Welding",
      description: "Dashboard for welding machines.",
      images: [
        // "https://i.ibb.co/rvWMkpr/smartweld-dashboard.png",
        "https://i.ibb.co/12p5LQH/Smart-Weld-level-setting-dark.png",
        "https://i.ibb.co/BTNcVGZ/Smart-Weld-Level-Setting.png",
      ],
      features: [
        "Realtime dashboard.",
        "Welding machine organizations can see their machines Realtime performance",
        "Welding machine organizations and can take actions according to it.",
      ],
      duration: "September 2019 - December 2020",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node JS",
        "Express",
        "MQTT",
        "Socket.io",
        "Mongo DB",
        "ApexCharts",
      ],
      client: "https://github.com/Badhon303/smartweld_standalone.git",
      //   server: "https://github.com/shahtaz-tqldd/fashionista-server",
      liveLink: "http://132.145.168.100:3000/",
      img: "https://i.ibb.co/rvWMkpr/smartweld-dashboard.png",
    },
    {
      _id: "645c8486c27f096e4c5617f0",
      name: "Athens",
      description: "A micro blogging social media platform",
      images: [
        "https://i.ibb.co/0qpz99d/screencapture-localhost-3000-2023-03-20-23-27-50.png",
      ],
      features: [
        "User can write posts by openning account with email password or google",
        "User can read other user’s post, like post, save post for later and can comment on the post",
        "Admin and super admin dashboard and authorization to remove or update post",
      ],
      duration: "9 Mar, 2023 - 22 Mar, 2023",
      technologies: [
        "HTML",
        "CSS",
        "TAilwind CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Express",
        "Mongo DB",
        "Firebase",
      ],
      client: "https://github.com/shahtaz-tqldd/athens-client",
      server: "https://github.com/shahtaz-tqldd/athens-server",
      liveLink: "https://athens-eb3bf.web.app/",
      img: "https://i.ibb.co/n1qG9FZ/athens.png",
    },
    {
      _id: "645c9093ab9c7ade5c7501cd",
      name: "Bookshore",
      description: "Full Stack website for buying and selling old books",
      images: ["https://i.ibb.co/PmzgHt4/book-Shore.png"],
      features: [
        "User can Buy and sell old books by signing up to the website",
        "Admin, Seller and Buyer dashboard to manage their buying and selling product",
        "Seller can advertise their products which will be displayed on the homepage on ad section",
      ],
      duration: "23 Nov, 2022 - 28 Nov, 2022",
      technologies: [
        "HTML",
        "CSS",
        "TAilwind CSS",
        "React JS",
        "Node JS",
        "Express",
        "Mongo DB",
        "JWT Authentication",
        "Firebase",
      ],
      client: "https://github.com/shahtaz-tqldd/bookshore-client",
      server: "https://github.com/shahtaz-tqldd/bookshore-server",
      liveLink: "https://bookshore-cd9c4.web.app/",
      img: "https://i.ibb.co/Jkg9yPy/book.png",
    },
    {
      _id: "645c924518ad439fdb1892db",
      name: "Hash Read",
      description: "A MERN Stack Blogsite to read and write blogs and articles",
      images: ["https://i.ibb.co/PmzgHt4/book-Shore.png"],
      features: [
        "User can read blogs, saves for later and favorite a blogs ",
        "User can request to be a write and if accepted by admin user can pay to register",
        "User, writer and admin dashboard",
      ],
      duration: "28 Dec, 2022 - 12 Jan, 2023",
      technologies: [
        "HTML",
        "CSS",
        "TAilwind CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Express",
        "Firebase",
        "Mongo DB",
      ],
      client: "https://github.com/shahtaz-tqldd/uptodate-client",
      server: "https://github.com/shahtaz-tqldd/uptodate-server",
      liveLink: "https://uptodate-c8e99.web.app/",
      img: "https://i.ibb.co/3NBNbzp/hashread-landing-page.png",
    },
  ]
  const props = {
    img: "https://cdn.lordicon.com/fpmskzsv.json",
    text: "My Projects",
  }
  return (
    <section id="projects" className="mb-20">
      <SectionTitle props={props} />
      <SectionHead>
        Featured <span className="text-primary">Projects</span>
      </SectionHead>
      <div className="projects">
        {projects?.slice(0, 4).map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            setModal={setModal}
          />
        ))}
      </div>
      <div className="mt-16 flex justify-end">
        <Link
          to="/projects"
          className="text-xl flex items-center gap-2 icon hover:text-primary transition duration-300"
        >
          All Projects
          <lord-icon
            target="a"
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="hover"
            class="current-color"
            style={{ width: "25px", height: "25px", margintTop: "4px" }}
          ></lord-icon>
        </Link>
      </div>
      <ProjectModal data={modal} setModal={setModal} />
    </section>
  )
}

export default Projects
