import React from "react"
import Avatar from "../images/avatar"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="text-gray-700 body-font relative bottom-0 mt-12 mb-6 sm:mb-0">
      <div className="container px-5 py-8 px-4 md:px-8 lg:px-12 xl:px-16 flex items-center sm:flex-row flex-col">
        <Link
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          to="/"
        >
          <div className="avatar-container flex justify-center h-8 mx-auto">
            <div className="avater-image-container relative w-8">
              <Avatar />
            </div>
          </div>
          <span className="ml-3 text-xl text-gray-500">FTM</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020 From The Mountain —
          <a
            href="https://twitter.com/ReyTheDev"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @ReyTheDev
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="ml-3 text-gray-500"
            href="https://twitter.com/ReyTheDev"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <title>Find Rey on Twitter</title>
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://www.linkedin.com/in/rey810/"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <title>Find Rey on LinkedIn</title>
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
