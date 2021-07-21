import * as React from "react"
import Button from '@material-ui/core/Button';

export default function Footer() {
  return (
    <footer className="global-body-wrapper">
      <hr className="thick"/>
      <h4>Learn about my creative process</h4>
      <p className="secondary-font">Click the button below to view the story map and design that supported the creation of this website.</p>
      <Button variant="contained" color="inherit">Learn More</Button>
    </footer>
  )
}
