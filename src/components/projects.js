import React from "react"
import Project from "../components/project"

const projects = () => {
  // all project info
  const projectsObj = {
    project1: {
      title: "Odin's Forecast",
      imageURL: "This is the project 1 image",
      description:
        "This is a project I made with a lot of grit and other nonsense",
      techStack: [
        { name: "html", url: "/" },
        { name: "css", url: "/" },
        { name: "javascript", url: "/" },
        { name: "cloudfare", url: "/" },
      ],
      siteURL: "/",
      codeURL: "/",
    },
    project2: {
      title: "Odin's Book",
      imageURL: "This is the project 2 image",
      description:
        "This is a project I made with a lot of grit and other nonsense",
      techStack: [
        { name: "html", url: "/" },
        { name: "css", url: "/" },
        { name: "javascript", url: "/" },
        { name: "rails", url: "/" },
      ],
      siteURL: "/",
      codeURL: "/",
    },
  }
  return (
    <section className="projects-container">
      <h4 className="projects-header">Projects</h4>
      <Project info={projectsObj.project1} />
      <Project info={projectsObj.project2} />
    </section>
  )
}

export default projects
