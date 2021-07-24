import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { EventIcon, SubEventIcon, ArrowRight } from "../components/icons"

const TimeSeries = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes.filter(nodes =>
    nodes.fields.slug.includes("story")
  )
  const timeSeries = data.allMarkdownRemark.nodes
    .filter(nodes => !nodes.fields.slug.includes("story"))
    .pop()
  const formatDate = date =>
    date
      ? `${new Date(date).getMonth() + 1} / ${new Date(date).getFullYear()}`
      : "Today"

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No stories found. Add markdown posts to "content/story" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <small className="label">Time series</small>
      <h2>{timeSeries.frontmatter.title}</h2>
      <p>{timeSeries.frontmatter.description}</p>
      <section
        dangerouslySetInnerHTML={{ __html: timeSeries.html }}
        itemProp="articleBody"
      />

      <ol className="container" style={{ listStyle: `none` }}>
        {posts.map((post, idx) => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li
              key={post.fields.slug}
              className={`timeline-block timeline-block-${
                idx % 2 === 0 ? "right" : "left"
              }`}
            >
              <EventIcon />
              <article
                className="timeline-content"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h3>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h3>
                </header>
                {post.frontmatter.subevents ? (
                  post.frontmatter.subevents.map((subevent, idx) => (
                    <section>
                      <div className="subevent">
                        <SubEventIcon />
                        <p itemProp="description" className="event">
                          {subevent.description}
                        </p>
                      </div>
                      <div className="timeline-content-footer">
                        <small className="date">
                          {formatDate(subevent.startdate)} -{" "}
                          {formatDate(subevent.enddate)}
                        </small>
                        {idx === post.frontmatter.subevents.length - 1 && (
                          <Link
                            to={post.fields.slug}
                            itemProp="url"
                            className="info-scent"
                          >
                            {/* <span>Read more</span> */}
                            <ArrowRight />
                          </Link>
                        )}
                      </div>
                    </section>
                  ))
                ) : (
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                      className="event"
                    />
                    <div className="timeline-content-footer">
                      <small className="date">
                        {formatDate(post.frontmatter.startdate)} -{" "}
                        {formatDate(post.frontmatter.enddate)}
                      </small>
                      <Link
                        to={post.fields.slug}
                        itemProp="url"
                        className="link"
                      >
                        {/* <span>Read more</span> */}
                        <ArrowRight />
                      </Link>
                    </div>
                  </section>
                )}
                <hr></hr>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default TimeSeries

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___startdate], order: ASC }) {
      nodes {
        fields {
          slug
        }
        html
        frontmatter {
          startdate
          enddate
          title
          description
          subevents {
            startdate
            enddate
            description
          }
        }
      }
    }
  }
`
