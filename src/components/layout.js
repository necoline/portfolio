import * as React from "react"

import Footer from "./footer"
import PageHeader from "./page-header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <PageHeader title={title} />
      <main className="global-body-wrapper">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
