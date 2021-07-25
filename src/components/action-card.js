import React from "react"

import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"

import LinkButton from "./link-button"

export default function ActionCard({ title, link, features }) {
  return (
    <Card
      css={`
         {
          margin: 2rem;
          width: 18rem;
        }
      `}
    >
      <CardContent
        css={`
           {
            display: flex;
            flex-direction: column;
          }
        `}
      >
        <div
          css={`
             {
              display: flex;
              justify-content: center;
            }
          `}
        >
          <h4>{title}</h4>
        </div>
        <CardActions>
          <LinkButton link={link} text="View" isFullWidth />
        </CardActions>
        <ul>
          {features.map(feature => (
            <li
              className="secondary-font"
              css={`
                 {
                  list-style: none;
                  padding: 0 1.5rem;
                  font-size: 0.833rem;
                }
              `}
            >
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
