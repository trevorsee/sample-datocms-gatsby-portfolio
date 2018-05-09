import React from 'react'
import Link from 'gatsby-link'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import { Logo } from '../styles/logo'

const IndexPage = () => (
  <div>
    <Link to="/about">
      <Logo>The Independent Group</Logo>
    </Link>
    {/* Test Index.js */}
  </div>
)

export default IndexPage
