import React from "react"
import Layout from "../components/containers/layout"
import Footer from "../components/general/footer"

const NewsletterSuccess = () => {
  return (
    <Layout canSeeHeader isPostHeader>
      <div className="sticky-footer-wrapper grid ">
        <div className="newsletter-success mt-16 flex justify-center items-center">
          <section className="welcome-message mx-4 md:mx-0 md:w-3/4 xl:w-7/12">
            <h1 className="font-bold leading-none mb-4 text-4xl md:text-5xl xl:text-6xl">
              Sweet, you're part of the club now!
            </h1>
            <p className="font-semibold md:text-xl xl:text-2xl">
              What a stellar move on your part for subscribing to this! Go
              ahead, give yourself a pat on the back. Seriously though, dooooo
              it. I know you get a ton of emails every day so I promise to make
              sure this is one of those you actually look forward to opening up.
              And, if I'm lucky, you'll enjoy reading them as much as I enjoy
              writing them.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default NewsletterSuccess
