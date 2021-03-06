import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const BlogCard = props => {
  const {
    cardTitle,
    image,
    imageAlt,
    category,
    summary,
    path,
    readingTime,
  } = props

  return (
    <div className="blog-post-card">
      <div className="h-full rounded-lg overflow-hidden">
        <Img fluid={image} alt={imageAlt} />
        <div className="p-6">
          <h2 className="tracking-widest text-sm title-font font-light mb-2">
            {category}
          </h2>
          <h1
            className="title-font text-xl
           font-bold mb-4"
          >
            {cardTitle}
          </h1>
          <p className="leading-relaxed mb-4 text-base">{summary}</p>
          <div className="flex justify-between items-center flex-wrap ">
            <Link to={path}>
              <a className="read-more-link inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
            <div className="card-icons-container">
              <span className="inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 border-gray-300 italic">
                {readingTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
