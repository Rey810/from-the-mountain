import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  title,
  image,
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

  // general meta
  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords || site.siteMetadata.keywords
  const metaVerification = site.siteMetadata.googleSiteVerification
  const url = pathname
    ? `${site.siteMetadata.siteUrl}${pathname}`
    : `${site.siteMetadata.siteUrl}`
  const ogType = type ? type : "website"
  // image meta
  const metaImage = image || placeholderImage.childImageSharp.resize
  console.log("metaImage", metaImage)
  const imagePath =
    image && image.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : `${site.siteMetadata.siteUrl}${placeholderImage.childImageSharp.resize.src}`
  const imageAlt = imageAltDescr
    ? imageAltDescr
    : "An image decorating a description card"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      //the %s is used by Helmet to replace it with the title
      titleTemplate={`%s | From The Mountain`}
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
          content: metaTitle,
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
          content: metaTitle,
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
          metaImage
            ? [
                {
                  property: "og:image",
                  content: imagePath,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
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
    >
      <script>
        var clicky_site_ids = clicky_site_ids || [];
        clicky_site_ids.push(101262924);
      </script>
      <script async src="//static.getclicky.com/js"></script>
      <link rel="me" href="https://github.com/Rey810" />
      <link rel="me" href="https://www.linkedin.com/in/rey810/" />
      <link rel="me" href="https://twitter.com/ReyTheDev" />
      <link rel="me" href="https://www.instagram.com/rey_810/" />
    </Helmet>
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
