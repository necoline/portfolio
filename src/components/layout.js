import * as React from "react"
import { Link } from "gatsby"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <h1 className="main-heading">
        <Link to="/">{title}</Link>
        </h1>
        <hr></hr>
      </header>
      <main className="global-body-wrapper">{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
