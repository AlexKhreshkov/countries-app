import React, { Children } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    padding: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
`

export default function CountriesList({ children }) {
    return <Wrapper>{children}</Wrapper>;
}
