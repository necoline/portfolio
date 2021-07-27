import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Button from "@material-ui/core/Button"

import { TitleIcon } from "./icons"

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
`

const PageHeader = () => {
  return (
    <header className="global-header">
      <div className="global-header-wrapper">
        <div />
        <TitleWrapper>
          <Link to="/" >
            <TitleIcon />
          </Link>
        </TitleWrapper>
        <HeaderLink
          className="global-header-link"
          href="mailto: hnhubner@gmail.com"
        >
          <Button variant="contained" color="primary">
            Connect
          </Button>
        </HeaderLink>
      </div>
    </header>
  )
}

export default PageHeader
