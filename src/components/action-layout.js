import * as React from "react"

import PageHeader from "./page-header"

const ActionLayout = ({ location, title, children, actionText }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <PageHeader title={title} />
      <section className="action-block">
        <h2>{actionText}</h2>
      </section>
      <main
        css={`
           {
            min-width: 70rem;
            padding: 0;
          }
        `}
      >
        {children}
      </main>
    </div>
  )
}

export default ActionLayout
