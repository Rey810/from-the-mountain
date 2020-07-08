import React from "react"
import Project from "../components/project"

const projects = () => {
  // all project info
  const projectsObj = {
    project1: {
      title: "Odin's Forecast",
      imageURL: "This is the project 1 image",
      description:
        "Ever wondered what Odin thought of our current weather application solutions? Well he thinks they're all rubbish so he tasked me with building a version that would master all others. This is it. Use responsibly.",
      techStack: [
        {
          name: "html5",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          name: "css3-alt",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        { name: "js", url: "https://javascript.info/" },
        { name: "cloudfare", url: "/" },
      ],
      siteURL: "/",
      codeURL: "/",
    },
    project2: {
      title: "Odin's Book",
      imageURL: "This is the project 2 image",
      description:
        "Apparently Odin loves to be social but he didn't fancy any of these other social media 'gimmicks' as he calls them. So he paid me a lot of money and awared me eternal life to bring his idea of the perfect social media app to life",
      techStack: [
        { name: "html5", url: "/" },
        { name: "css3-alt", url: "/" },
        { name: "js", url: "/" },
        { name: "rails", url: "/" },
      ],
      siteURL: "/",
      codeURL: "/",
    },
  }
  return (
    <section className="projects-container px-4 pb-10">
      <h4 className="projects-header pb-8 text-4xl font-bold">Projects</h4>
      <div className="projects-wrapper lg:flex lg:flex-row lg:flex-wrap">
        <Project info={projectsObj.project1} />
        <Project info={projectsObj.project2} />
      </div>
    </section>
  )
}

export default projects
