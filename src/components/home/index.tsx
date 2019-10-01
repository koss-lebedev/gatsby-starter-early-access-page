import React from 'react'
import Form from "components/form"
import BannerImage from "components/banner-image"
import { Wrapper, Main, Banner } from './styled'

const Home = () => (
  <Wrapper>
    <Main>
      <h1>Unleash your creativity<br/> with the help of our product!</h1>
      <p>Be the first one to know when my awesome product is released!<br />Leave your email below to get notified:</p>
      <Form />
    </Main>
    <Banner>
      <BannerImage />
    </Banner>
  </Wrapper>
)

export default Home
