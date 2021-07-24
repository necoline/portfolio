import * as React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

import logo from "../images/n-icon.png"

const PageHeader = ({ title }) => {
  return (
    <header className="global-header">
      <div className="global-header-wrapper">
        <img id="logo" src={logo} alt="Logo" />
        <h1 className="global-heading">
          <Link to="/">{title}</Link>
        </h1>
        <Link className="global-header-link" href="mailto: hnhubner@gmail.com">
          <Button variant="contained" color="primary">
            Connect
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default PageHeader
