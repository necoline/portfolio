import * as React from "react"

import LinkButton from "./link-button"

export default function Footer() {
  return (
    <footer>
      <hr className="thick" />
      <h4>Learn about Necoline's creative process</h4>
      <p className="secondary-font">
        Click the button below to view the story map and design that supported
        the creation of this website.
      </p>
      <LinkButton link="/process" text="Learn More" />
    </footer>
  )
}
