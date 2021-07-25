import * as React from "react"
import { graphql } from "gatsby"

import ActionLayout from "../components/action-layout"
import ActionCard from "../components/action-card"
import Seo from "../components/seo"

const Process = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const actions = [
    {
      title: "Product",
      link: "https://www.figma.com/file/LDa3sfauikBp1DAPg0YsWk/Personal-journey?node-id=0%3A1",
      features: ["Product vision and objectives", "User story map"],
    },
    {
      title: "Design",
      link: "https://www.figma.com/file/owyZq5irzPPq5CvCa97HKd/timeline?node-id=0%3A11",
      features: ["Typography and color scheme", "Wireframes", "Resume design"],
    },
    {
      title: "Code",
      link: "https://github.com/necoline/portfolio",
      features: ["Open source codebase"],
    },
  ]

  return (
    <ActionLayout
      location={location}
      title={siteTitle}
      actionText="Learn about Necoline's creative process."
    >
      <Seo title="Necos Process" description="links to authors creative process" />
      <section
        css={`
           {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
        `}
      >
        {actions.map(action => (
          <ActionCard
            key={action.title}
            title={action.title}
            link={action.link}
            features={action.features}
          />
        ))}
      </section>
    </ActionLayout>
  )
}

export default Process

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
