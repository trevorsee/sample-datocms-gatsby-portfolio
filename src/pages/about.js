import React from 'react'
import Link from 'gatsby-link'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import close from "../assets/close.svg"
import { Container, Close, Block, Left, Right } from "../styles/about"
import { Logo } from "../styles/logo"

const About = ({data}) => (
  <div>
    {console.log()}
    <Container>
      <Link to="/"><Logo>The Independent Group</Logo></Link>
      <Link to="/"><Close src={close} alt="back" /></Link>
      <Block>
        <Left
          dangerouslySetInnerHTML={{
            __html: data.datoCmsAbout.leftColumnNode.childMarkdownRemark.html,
          }}
        />
        <Right
          dangerouslySetInnerHTML={{
            __html: data.datoCmsAbout.rightColumnNode.childMarkdownRemark.html,
          }}
        />
      </Block>
    </Container>
  </div>
)

export default About

export const query = graphql`
  query AboutQuery {
    datoCmsAbout {
      id
      leftColumnNode {
        id
        childMarkdownRemark {
          id
          html
        }
      }
      rightColumnNode {
        id
        childMarkdownRemark {
          id
          html
        }
      }
    }
  }
`
