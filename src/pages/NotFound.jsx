import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const NotFoundText = styled.div`
  font-size: 50px;
`

export default function NotFound() {
  return (
    <>
      <Header />
      <Wrapper>
        <NotFoundText>Not found 404</NotFoundText>
      </Wrapper>
    </>
  )
}
