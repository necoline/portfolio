import * as React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

import Footer from "./footer"
import logo from "../images/n-icon.png"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div className="global-header-wrapper">
          <img id="logo" src={logo} alt="Logo" />
          <h1 className="global-heading">
            <Link to="/">{title}</Link>
          </h1>
          <Link
            className="global-header-link"
            href="mailto: hnhubner@gmail.com"
          >
            <Button variant="contained" color="primary">
              Connect
            </Button>
          </Link>
        </div>

        <hr></hr>
      </header>
      <main className="global-body-wrapper">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
