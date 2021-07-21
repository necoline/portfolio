import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ArrowLeft } from "../components/icons"

const StoryTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  const formatDate = date => date ? `${new Date(date).getMonth() + 1} / ${new Date(date).getFullYear()}` : 'Today'

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="time-series"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div className="label-row">
            <small className="label">Time series - story</small>
            <small className="date">{formatDate(post.frontmatter.startdate)} - {formatDate(post.frontmatter.enddate)}</small>
          </div>
          <div className="heading">
            <Link to='/' itemProp="url" className="link">
              <ArrowLeft/>
              <span>Back to Time Story</span>
            </Link>
          </div>
          <h2 itemProp="headline">{post.frontmatter.title}</h2>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        
      </article>
      <nav className="time-series-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default StoryTemplate

export const pageQuery = graphql`
  query StoryBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        startdate
        enddate
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
