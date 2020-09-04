import React from "react"
import Layout from "../components/containers/layout"
import Footer from "../components/general/footer"

const NewsletterSuccess = () => {
  return (
    <Layout canSeeHeader isPostHeader>
      <div className="sticky-footer-wrapper grid ">
        <div className="newsletter-success mt-16 flex justify-center items-center">
          <section className="welcome-message mx-6 md:mx-0 md:w-3/4">
            <h1 className="font-bold leading-none mb-4 text-4xl md:text-5xl xl:mb-12 xl:text-6xl">
              Sweet, you're part of the club now!
            </h1>
            <p className="opacity-70 md:text-xl md:w-11/12 xl:mx-auto xl:w-2/3 xl:text-xl">
              What a stellar move on your part for subscribing to this! Go
              ahead, give yourself a pat on the back. Seriously though, dooooo
              it. I know you get a ton of emails every day so I promise to make
              sure this is one of those you actually look forward to opening up.
              And, if I'm lucky, you'll enjoy reading them as much as I enjoy
              writing them.
            </p>
            <br />
            <p className="opacity-70 md:text-xl md:w-11/12 xl:mx-auto xl:w-2/3 xl:text-xl">
              As much as I like having you here, I'd love to help out with web
              dev stuff or mental wellbeing info so drop me a message at
              rey@fromthemountain.co.za and I'll get back to you personally :)
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default NewsletterSuccess
