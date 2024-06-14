import { useQuery } from "@tanstack/react-query"
import React from "react"
import useTitle from "../../hooks/useTitle"
import BlogCard from "../../components/Cards/BlogCard"
import SectionTitle from "../../components/Typography/SectionTitle"
import SectionHead from "../../components/Typography/SectionHead"

const Blogs = () => {
  useTitle("Blogs")
  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(
        "https://portfolio-backend-sepia-seven.vercel.app/blogs"
      )
      const data = await res.json()
      return data
    },
  })
  const props = { img: "https://cdn.lordicon.com/vufjamqa.json", text: "Blogs" }
  return (
    <section className="mb-20">
      <SectionTitle props={props} />
      <SectionHead>
        Dev <span className="text-primary">Blogs</span>
        <div className="flex lg:flex-row md:flex-row flex-col-reverse gap-4 sticky top-0 z-10 bg-base-100 lg:pt-16 lg:pb-8 pt-4 pb-6">
          <div className="lg:w-1/2 md:w-1/2 relative lg:block md:block hidden">
            <input
              type="text"
              placeholder="Search Blogs"
              className="pl-10 input input-bordered border-[2px] w-full"
              value=""
            />
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="absolute top-[32px] left-4 text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div className="lg:w-1/2 md:w-1/2">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled="" value="">
                Filter with
              </option>
              <option value="all">All</option>
              <option value="Database">Database</option>
              <option value="Event loop">Event loop</option>
              <option value="Frontend">Frontend</option>
              <option value="Javascript">Javascript</option>
              <option value="Mongodb">Mongodb</option>
              <option value="Next js">Next js</option>
              <option value="Programming">Programming</option>
              <option value="React js">React js</option>
              <option value="Web development">Web development</option>
            </select>
          </div>
        </div>
      </SectionHead>
      <div className="grid grid-cols-1 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} index={index} blog={blog} />
        ))}
      </div>
    </section>
  )
}

export default Blogs
