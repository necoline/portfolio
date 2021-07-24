import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

export default function LinkButton({ text, link, isFullWidth }) {
  return (
    <Link
      to={link}
      className="secondary-font"
      css={`
         {
          display: block;
          width: ${isFullWidth ? "100%" : "12rem"};
          background-color: black;
          color: white;
          padding: 0.5rem;
          text-decoration: none;
          text-align: center;
          border-radius: 4px;
        }
        &:hover {
          opacity: 0.75;
        }
      `}
    >
      {text}
    </Link>
  )
}

LinkButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  isFullWidth: PropTypes.bool,
}
