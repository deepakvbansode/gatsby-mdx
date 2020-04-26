import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    } 
  `)
  return (

    <nav className="sidebar">
      <ul>
        {data.allMdx.edges.map(({node}) => (<li key={node.fields.slug}>
          <Link to={node.fields.slug}>{node.fields.slug.replace(/^\/|\/$/mg,"")}</Link>
        </li>))}
      </ul>
    </nav>
  )
}

export default Nav;