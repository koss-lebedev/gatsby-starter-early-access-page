import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled'
import mq from 'styles/mq'

const StyledImg = styled(Img)`
  width: 200px;
  margin: 0 auto;

  ${mq.medium} {
    width: 300px;
  }

  ${mq.large} {
    width: 400px;
  }
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "product.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <StyledImg fluid={data.image.childImageSharp.fluid} />
}

export default Image
