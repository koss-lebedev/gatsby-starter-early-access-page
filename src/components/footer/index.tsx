import React, { FC } from 'react'
import { Wrapper, Inner } from './styled'

const Footer: FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <Wrapper>
    <Inner>
      {siteTitle} © {new Date().getFullYear()}
    </Inner>
  </Wrapper>
)

export default Footer
