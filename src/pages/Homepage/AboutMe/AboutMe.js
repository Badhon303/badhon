import React from "react"
import SectionTitle from "../../../components/Typography/SectionTitle"
import SectionHead from "../../../components/Typography/SectionHead"

const AboutMe = () => {
  const props = {
    img: "https://cdn.lordicon.com/bhfjfgqz.json",
    text: "About Me",
  }
  return (
    <section id="about" className="mb-16">
      <SectionTitle props={props} />
      <SectionHead>
        Passionate Web Developer with a Dedication to{" "}
        <span className="text-primary">Continuous Learning</span>
      </SectionHead>
      <div data-aos="fade-up" data-aos-delay={"40"}>
        <p className="text-white text-justify max-w-[800px]">
          I discovered a passion for web development early on, and the challenge
          of creating functional and visually appealing experiences continues to
          drive me. With over 5 years of experience, I excel in both front-end
          and back-end development. I've independently developed 12 projects,
          always seeking new challenges to further grow my skills. <br />
          Dedicated to continuous learning, I actively seek out knowledge
          through books, online tutorials, and industry conferences.
          Additionally, I participate in online developer communities, fostering
          collaboration and knowledge exchange. The ever-evolving nature of web
          development excites me, and I'm eager to contribute to its future.
        </p>
        <div className="flex">
          <a
            href="https://drive.google.com/file/d/17gWrzoGZukbz-7sZjjRH8crbxzbHWmG7/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:text-primary transition duration-300 text-lg flex gap-2 items-center uppercase icon mt-10">
              <lord-icon
                target="button"
                src="https://cdn.lordicon.com/egiwmiit.json"
                trigger="hover"
                class="current-color"
                style={{ width: "24px", height: "24px" }}
              ></lord-icon>
              Get my CV
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
