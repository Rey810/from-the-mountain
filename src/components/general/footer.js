import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

const Footer = ({ customBgColor }) => {
  return (
    <footer style={{ backgroundColor: `${customBgColor}` }}>
      <div className="footer-content">
        <div className="footer-content-1">
          <h3>About FTM</h3>
          <p>
            From The Mountain is a culmination of technical expertise in the
            world of the web & a passion for design. In other words, I build
            online stuff that looks great. Pop me a message to chat about your
            next project.
          </p>
          <div className="footer-icons">
            <a
              title="Find Rey on Twitter"
              aria-label="Find Rey on Twitter"
              href="https://twitter.com/ReyTheDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                title="Find Rey on Twitter"
                icon={["fab", "twitter"]}
              />
            </a>
            <a
              aria-label="See Rey's Code on Github"
              title="See Rey's Code on Github"
              href="https://github.com/Rey810"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                title="See Rey's Code on Github"
                icon={["fab", "github"]}
              />
            </a>
            <a
              aria-label="Find Rey on LinkedIn"
              title="Find Rey on LinkedIn"
              href="https://www.linkedin.com/in/rey810/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                title="Find Rey on LinkedIn"
                icon={["fab", "linkedin"]}
              />
            </a>
          </div>
        </div>
        <div className="footer-content-2">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a href="/#Connect">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
