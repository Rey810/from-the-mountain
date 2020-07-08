import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  title,
  image: metaImage,
  imageAltDescr,
  keywords,
  pathname,
  type,
}) {
  const { site, placeholderImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitterAuthor
            keywords
            siteUrl
            googleSiteVerification
          }
        }
        placeholderImage: file(relativePath: { eq: "hero_light_2.jpg" }) {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    `
  )

  const pageTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const imagePath =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}/${metaImage.src}`
      : `${site.siteMetadata.siteUrl}/${placeholderImage.childImageSharp.resize.src}`

  const image = metaImage || placeholderImage.childImageSharp.resize

  const imageAlt = imageAltDescr
    ? imageAltDescr
    : "An image decorating a description card"

  const ogType = type ? type : "website"
  const metaKeywords = keywords || site.siteMetadata.keywords
  const metaVerification = site.siteMetadata.googleSiteVerification
  const url = pathname
    ? `${site.siteMetadata.siteUrl}/${pathname}`
    : `${site.siteMetadata.siteUrl}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      //the %s is used by Helmet to replace it with the title
      titleTemplate={`%s | From The Mountain`}
      // link={
      //   canonical
      //     ? [
      //         {
      //           rel: "canonical",
      //           href: canonical,
      //         },
      //       ]
      //     : []
      // }
      meta={[
        {
          name: `google-site-verification`,
          content: metaVerification,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `og:url`,
          content: url,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: ogType,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterAuthor,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords.split(","),
        },
      ]
        .concat(
          image
            ? [
                {
                  property: "og:image",
                  content: imagePath,
                },
                {
                  property: "og:image:width",
                  content: image.width,
                },
                {
                  property: "og:image:height",
                  content: image.height,
                },
                {
                  name: "twitter:image:alt",
                  content: imageAlt,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO
